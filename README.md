# Dev Monorepo

Project of an online course platform using a monorepo with Next.js for the frontend and Nest.js for the backend, following a microservices architecture and using Apache Kafka.
</br>
**Obs:** In this project, I had no intention to build the entire course platform. Instead, the focus was to develop and study microservices architecture with NestJS and GraphQL.

## Author

- [@lucasyule2212 - GitHub](https://www.github.com/lucasyule2212)
- [lucasyulerocha - LinkedIn](https://www.linkedin.com/in/lucasyulerocha/)

## Used Techs

**Monorepo:** Turborepo

**Frontend:** React, Next.js, GraphQL Codegen

**Backend:** Nest.js, GraphQL, Apollo Client, Apache Kafka

**Database:** Serverless PostgreSQL, PrismaORM

**Styling/Animations/Icons:** TailwindCSS, ShadcnUI, RadixUI, Lucide Icons

**Auth Manager**: Auth0

**Others:** Zod, Husky, Commitizen, Commitlint, Lint-staged

## Services Description:

- **Purchase Service**:
  - [Admin] Products register
  - [Admin] Products list
  - [Auth] Shopping list
  - [Public] Products purchase
  - [Public] Available products for purchase
- **Classroom Service**:
  - [Admin] Registrations list
  - [Admin] Students list
  - [Admin] Courses list
  - [Admin] Courses register
  - [Auth] List courses a student has access
  - [Auth] List course content

## Features

- Monorepo architecture by Turborepo
- Microservices architecture with Apache Kafka.
- Cloud database by Neon.tech (PostgreSQL)
- Unitary testing with Jest
- Authentication by Auth0
- GraphQL API Gateway with Apollo Federation

## Learnings...

- Nest.js framework
- Monorepo architecture and configuration
- Auth0 authentication management
- Serverless Database with Neon
- Microservices architecture + Apache Kafka (Message Brokers)
- GraphQL + Apollo Client practical studies
- Apollo Federation
- GraphQL Codegen

## Project Architecture
![arch](https://github.com/lucasyule2212/dev-monorepo/assets/55456226/e773172a-4f5d-4562-bd5e-fd3e9ab417ea)


## Screenshots
- **Homepage**
![](https://i.imgur.com/cJ2Q6YG.png)
- **Auth0 Login**
![](https://i.imgur.com/vWph3xY.png)
- **Courses Loading**
![](https://i.imgur.com/1Y4ba7W.png)
- **Courses Loaded**
![](https://i.imgur.com/W7jXutO.png)
- **Enroll action loading**
![](https://i.imgur.com/CgEqVFn.png)
- **Enroll confirmation message**
![](https://i.imgur.com/YrGVQ0e.png)
- **Already enrolled message**
![](https://i.imgur.com/K29qiuV.png)
- **User courses**
![](https://i.imgur.com/MaCf6Wk.png)
