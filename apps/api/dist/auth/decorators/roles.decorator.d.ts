import { DefaultUserRole } from '../../generated/prisma/enums.js';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: DefaultUserRole[]) => import("@nestjs/common").CustomDecorator<string>;
