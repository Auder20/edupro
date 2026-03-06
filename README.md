# EduPro

Plataforma educativa para la gestión de cursos, lecciones y comentarios. Desarrollada con una arquitectura cliente-servidor (SPA y API RESTful).

## Stack Tecnológico

- **Frontend:** Angular 18, Angular Material, SCSS, RxJS, TypeScript.
- **Backend:** Node.js, Express.js.
- **Base de Datos:** MySQL, Sequelize (ORM).
- **Seguridad:** JWT, bcrypt, Helmet, express-rate-limit, Joi.
- **Infraestructura:** Render (API), Clever Cloud (DB).

## Arquitectura

- **Frontend (SPA):** Maneja el estado reactivo y consumo asíncrono de la API mediante RxJS.
- **Backend (API REST):** Gestiona la lógica de negocio, validaciones cruzadas y persistencia de datos.
- **Seguridad:** Implementa control de acceso basado en roles (RBAC), autenticación vía JWT, sanitización de inputs y prevención de fuerza bruta mediante rate limiting.

## Funcionalidades Principales

- **Gestión de Usuarios:** Registro, inicio de sesión y validación de sesiones con tokens.
- **Control de Acceso (RBAC):** Permisos diferenciados para roles administrativos, instructores y estudiantes.
- **Gestión de Contenido:** Consumo y administración de cursos estructurados en módulos y lecciones.
- **Interacción:** Sistema de comentarios anexado a cada lección individual.

## Endpoints Clave

| Método | Endpoint | Descripción |
|---|---|---|
| `POST` | `/api/auth/register` | Creación de cuenta |
| `POST` | `/api/auth/login` | Inicio de sesión y asignación de JWT |
| `GET` | `/api/courses` | Listado general de cursos |
| `GET` | `/api/courses/:id` | Detalle de un curso con lecciones |
| `POST` | `/api/lessons/:id/comments` | Creación de comentario en lección |

## Variables de Entorno

Archivo `.env` requerido en el directorio `backend/`:

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
## screeshots
screenchots/
## Demo en Producción

- **Frontend:** [https://edupro-sandy.vercel.app/](https://edupro-sandy.vercel.app/)

