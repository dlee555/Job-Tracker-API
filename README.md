# 📋 Job Tracker API

A backend API to manage job applications, built with **NestJS**, **TypeScript**, **PostgreSQL**, and **Prisma**.

---

## 🔧 Tech Stack

- **Backend Framework**: NestJS  
- **Language**: TypeScript  
- **Database**: PostgreSQL  
- **ORM**: Prisma  
- **Authentication**: JWT (access + refresh tokens)  
- **Testing**: Jest + Supertest  
- **Deployment**: Docker + Railway/Render  
- **API Docs**: Swagger  

---

## 🚀 Features

- Modular architecture (auth, jobs, notes, common)
- JWT authentication
- CRUD operations for job applications
- Notes and status updates for each job
- Dashboard analytics (e.g. application status counts)
- Search, filter, and pagination support
- Swagger API documentation
- Docker support for local development

---

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/dlee555/job-tracker-api.git
cd job-tracker-api/backend 
```

### 2. Install Dependencies
```bash
npm install
```
### 3. Set Environment Variables
Create a .env file in the backend/ directory:
```env
DATABASE_URL="postgresql://{YOUR_WHATEVER_NAME}@localhost:{PORT}/jobtracker"
JWT_SECRET="your_jwt_secret"
JWT_REFRESH_SECRET="your_refresh_token_secret"
```

### 4. Run PostgreSQL with Docker
```bash
docker-compose up -d
```

### 5. Generate and Push Prisma Schema
```bash
npx prisma db push
npx prisma generate
```

### 6. Start the Development Server
```bash
npm run start:dev
```

### 📁 Project Structure
```pgsql
backend/
├── src/
│   ├── auth/        # Authentication module
│   ├── jobs/        # Job tracking module
│   ├── user/        # User module
│   ├── common/      # Shared utilities (guards, DTOs, interceptors)
│   ├── prisma/      # PrismaService wrapper
│   └── main.ts      # App entry point
├── prisma/
│   └── schema.prisma
├── docker-compose.yml
├── .env
└── README.md
```

### 🐳 Docker Quick Commands
```bash
docker-compose up -d     # Start PostgreSQL container
docker-compose down      # Stop container and remove volumes
```

### 📌 License
This project is licensed under the MIT License.

