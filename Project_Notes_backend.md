=====================================================================
# Special notes
=====================================================================
### NestJS Starter Dependencies (Always Needed)
```bash
npm install @nestjs/core @nestjs/common @nestjs/platform-express rxjs reflect-metadata
```
- **@nestjs/core:**	The main NestJS framework engine
- **@nestjs/common:**	Core decorators, pipes, guards, utilities
- **@nestjs/platform-expres:**	Adapts NestJS to work with Express HTTP server
- **rxjs:**	Reactive programming utilities (used internally)
- **reflect-metadata:** Enables decorators and DI in TypeScript/NestJS

=====================================================================
# Setup notes
=====================================================================
### 🧱 1. System Setup
- Install Node -	nvm install --lts
- Install Git -     sudo apt install git
- Docker/Postgres

### 📦 2. GitHub Repo First (Clean Start)
- 1. Create an empty repo on GitHub (no README/gitignore)
- 2. Locally:
```bash
mkdir job-tracker-api && cd job-tracker-api
git init
git remote add origin https://github.com/{your-user}/job-tracker-api.git
```

### 🚀 3. Generate NestJS App
```bash
nest new backend
cd backend
```

### 🔐 4. Initialize Prisma
- note: in backend dir
```bash
npx prisma init
```
- Update .env with your DB connection:
   - DATABASE_URL="postgresql://postgres:password@localhost:5432/job_tracker"
   - if docker, use docker url
- Update Prisma schema with data models (user and job), then run
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 🏗 5. Setup Recommended Scripts in package.json
```json
"scripts": {
  "start": "nest start",
  "start:dev": "nest start --watch",
  "build": "nest build",
  "format": "prettier --write \"src/**/*.ts\"",
  "test": "jest",
  "lint": "eslint \"src/**/*.ts\""
}
```

### 🧰 6. Install NestJS and Prisma Dependencies
note: in backend dir
```bash
npm install @nestjs/config @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt
npm install -D @types/bcrypt @types/passport-jwt
npm install class-validator class-transformer
```

### Test run
```bash
npm run start:dev
npx prisma migrate dev --name init
npx prisma studio
```

============================================================================
### 7/24 learning summary
(Tool/Concept)	(What You Learned)
- **NestJS CLI**	Scaffolds modular backend apps (like Angular or Spring Boot for the backend)
- **Node.js** + npm	Core runtime for running TypeScript backend and managing packages
- **Prisma ORM**	Type-safe database client + schema migration tool
- **Docker**	Containerizes PostgreSQL so you don’t install it natively
- **Git/GitHub**	Difference between git init vs git clone, best practices for solo/team dev
- **.env configs**	Controls database connection for local vs cloud environments

# ✅ What You Did Today
### 🔧 Environment Setup
- ✅ Installed Node.js (v20+) using nvm
- ✅ Installed NestJS CLI
- ✅ Cloned your GitHub repo and inspected the structure
- ✅ Fixed missing package.json and .gitignore
- ✅ Installed all project dependencies with npm install

### 🗄️ Database + ORM
- ✅ Installed Prisma and initialized your schema
- ✅ Set up PostgreSQL using Docker Compose
- ✅ Ran your first Prisma migration
- ✅ Successfully opened Prisma Studio and connected to your DB

7/24/2025
============================================================================
============================================================================
### 7/26 learning summary

# 🔧 Core Implementation:
### Set up Auth Module
    -   Created AuthDto with validation using class-validator
    -   Implemented AuthService with signup and login logic
    -   Passwords hashed using bcrypt
    -   JWT access and refresh tokens generated using @nestjs/jwt

### Database Integration with Prisma
    -   Extended User model with hash and hashedRt fields
    -   Ran Prisma migrations
    -   Connected Prisma to PostgreSQL using .env

### Created Missing Core Files
    -   Added tsconfig.json and tsconfig.build.json
    -   Created missing main.ts and app.module.ts
    -   Fixed broken or missing module imports

### Directory Structure Standardization
    -   Moved .env to correct location (/backend)
    -   Confirmed prisma/ lives under /backend, not /src

### Project Now Starts Correctly
    -   npm run start:dev works
    -   DTO decorators function correctly
    -   No missing modules or compilation errors

# 🪲 Problems Faced
|❌ Issue |🛠️ Fix   |
|:--------|:---------|
|Decorators like @IsEmail throwing TS errors |	Missing tsconfig.json with proper metadata flags|
|start:dev not available |	Added proper NestJS scripts to package.json|
|Missing core files (app.module.ts, main.ts) |	Created them manually|
|PrismaClientInitializationError |  .env file was in wrong location|
|login() and signTokens() not found |	Missing or incomplete methods in AuthService|
|DTO property assignment error |	Fixed with email!: string or strict config updates|

# 🔍 What Can Be Improved
|Suggestion |	Why |
|:----------|:------|
|✅ Use .env.example in repo |	Helps others understand required env variables|
|✅ Use ConfigModule from @nestjs/config |	Clean way to manage env access in services|
|✅ Create a test user & test /auth/signup with Postman |	Validate full flow before adding Job module|
|✅ Add refresh token endpoint in the future |	For full JWT auth experience|
|✅ Enable logging or error filters |	Better debugging when scaling logic later|