export enum UserRole {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  STUDENT = 'student',
  GUEST = 'guest',
}

export function isAdmin(role: string): boolean {
  return role === UserRole.ADMIN;
}

export function isTeacher(role: string): boolean {
  return role === UserRole.TEACHER;
}

export function isStudent(role: string): boolean {
  return role === UserRole.STUDENT;
}

export function isGuest(role: string): boolean {
  return role === UserRole.GUEST;
}

export function hasRole(role: string, roles: string[]): boolean {
  return roles.includes(role);
}
