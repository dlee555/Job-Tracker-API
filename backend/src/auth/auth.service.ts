// src/auth/auth.service.ts
import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async signup(dto: AuthDto) {
    const hash = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });

    return this.signTokens(user.id, user.email);
  }

  async login(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user || !(await bcrypt.compare(dto.password, user.hash))) {
      throw new ForbiddenException('Invalid credentials');
    }

    return this.signTokens(user.id, user.email);
  }

  async signTokens(userId: number, email: string) {
    const payload = { sub: userId, email };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwt.signAsync(payload, {
        secret: 'ACCESS_SECRET',
        expiresIn: '15m',
      }),
      this.jwt.signAsync(payload, {
        secret: 'REFRESH_SECRET',
        expiresIn: '7d',
      }),
    ]);

    await this.prisma.user.update({
      where: { id: userId },
      data: {
        hashedRt: await bcrypt.hash(refreshToken, 10),
      },
    });

    return { accessToken, refreshToken };
  }
}
