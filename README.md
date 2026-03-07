# EduPro

![Angular](https://img.shields.io/badge/Angular-18-DD0031?style=flat&logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?style=flat&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?style=flat&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=flat&logo=jsonwebtokens&logoColor=white)
![Render](https://img.shields.io/badge/Deploy-Render-46E3B7?style=flat&logo=render&logoColor=white)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-000000?style=flat&logo=vercel&logoColor=white)

Plataforma educativa fullstack donde instructores pueden crear y publicar cursos estructurados en módulos y lecciones, y los estudiantes pueden inscribirse, tomar exámenes, participar en foros y comentar cada lección. Desarrollada con arquitectura cliente-servidor (SPA + API RESTful).

---

## ¿Qué problema resuelve?

Las plataformas educativas existentes son complejas de configurar o costosas para instructores independientes. EduPro ofrece un entorno completo y ligero donde cualquier instructor puede publicar su contenido, gestionar estudiantes inscritos y medir su progreso mediante exámenes, todo desde una interfaz moderna y sin fricciones.

---

## Screenshots

screenshots/

---

## 🚀 Demo en Producción

- **Frontend:** [https://edupro-sandy.vercel.app/](https://edupro-sandy.vercel.app/)
- **Backend API:** Render

**Cuentas de prueba:**

| Rol | Email | Password |
|-----|-------|----------|
| Administrador | auder@example.com | Password123! |
| Instructor | tomas.instructor@example.com | Password123! |
| Estudiante | student1@example.com | Password123! |

---

## Stack Tecnológico

- **Frontend:** Angular 18, Angular Material, SCSS, RxJS, TypeScript
- **Backend:** Node.js, Express.js
- **Base de Datos:** MySQL, Sequelize (ORM)
- **Seguridad:** JWT, bcrypt, Helmet, express-rate-limit, Joi
- **Infraestructura:** Render (API), Clever Cloud (DB), Vercel (Frontend)

---

## Arquitectura

- **Frontend (SPA):** Maneja estado reactivo y consumo asíncrono de la API mediante RxJS
- **Backend (API REST):** Gestiona lógica de negocio, validaciones cruzadas y persistencia de datos
- **Seguridad:** Control de acceso basado en roles (RBAC), autenticación JWT, sanitización de inputs y prevención de fuerza bruta mediante rate limiting

---

## Funcionalidades Principales

- **Gestión de Usuarios:** Registro, inicio de sesión y validación de sesiones con tokens
- **Control de Acceso (RBAC):** Permisos diferenciados para administradores, instructores y estudiantes
- **Gestión de Cursos:** Creación y administración de cursos estructurados en módulos y lecciones
- **Inscripciones:** Los estudiantes pueden inscribirse a cursos disponibles y hacer seguimiento de su progreso
- **Sistema de Exámenes:** Evaluaciones por curso con corrección automática
- **Foros:** Espacio de discusión por curso donde estudiantes e instructores interactúan
- **Comentarios:** Sistema de comentarios anexado a cada lección individual

---

## Endpoints Clave

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Registro de usuario |
| `POST` | `/api/auth/login` | Inicio de sesión y asignación de JWT |
| `GET` | `/api/courses` | Listado general de cursos |
| `GET` | `/api/courses/:id` | Detalle de curso con módulos y lecciones |
| `POST` | `/api/courses/:id/enroll` | Inscripción a un curso |
| `POST` | `/api/lessons/:id/comments` | Crear comentario en lección |
| `GET` | `/api/courses/:id/forum` | Obtener foro del curso |
| `POST` | `/api/courses/:id/forum` | Publicar en el foro |
| `GET` | `/api/courses/:id/exam` | Obtener examen del curso |
| `POST` | `/api/courses/:id/exam` | Enviar respuestas del examen |

---

## Instalación Local

**Requisitos:** Node.js 18+, MySQL 8+
```bash
git clone https://github.com/Auder20/edupro.git
cd edupro
```

**Backend:**
```bash
cd backend
cp .env.example .env  # Configura tus variables
npm install
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
ng serve
```

Frontend en `http://localhost:4200` | Backend en `http://localhost:3000`

---

## Variables de Entorno

Archivo `.env` en el directorio `backend/`:
```env
PORT=3000
NODE_ENV=development
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=
DB_NAME=edupro_db
DB_DIALECT=mysql
JWT_SECRET=secret_key
JWT_EXPIRES_IN=24h
```

---

## Autor

**Auder González** — Fullstack Developer
Python · Django · Angular · Node.js · MySQL

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Auder%20González-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/auder-gonzalez-martinez)
[![GitHub](https://img.shields.io/badge/GitHub-Auder20-181717?style=flat&logo=github&logoColor=white)](https://github.com/Auder20)