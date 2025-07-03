/**
 * roleMiddleware.js
 * Middleware para controlar el acceso según roles: 'admin', 'instructor', 'student'
 */

const roles = {
    ADMIN: 'admin',
    INSTRUCTOR: 'instructor',
    STUDENT: 'student',
};

/**
 * Middleware para verificar si el usuario tiene uno de los roles permitidos.
 * @param {...string} allowedRoles - Roles permitidos para acceder a la ruta.
 */
function authorizeRoles(...allowedRoles) {
    return (req, res, next) => {
        // Suponemos que req.user existe y tiene una propiedad 'role'
        if (!req.user || !req.user.role) {
            return res.status(401).json({ message: 'No autenticado' });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Acceso denegado: rol insuficiente' });
        }

        next();
    };
}

// Ejemplo de middlewares específicos por rol
const isAdmin = authorizeRoles(roles.ADMIN);
const isInstructor = authorizeRoles(roles.INSTRUCTOR);
const isStudent = authorizeRoles(roles.STUDENT);

// Ejemplo de middleware para admin o instructor
const isAdminOrInstructor = authorizeRoles(roles.ADMIN, roles.INSTRUCTOR);

module.exports = {
    roles,
    authorizeRoles,
    isAdmin,
    isInstructor,
    isStudent,
    isAdminOrInstructor,
};