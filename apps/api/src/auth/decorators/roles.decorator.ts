import { SetMetadata } from '@nestjs/common';
import { DefaultUserRole } from '../../generated/prisma/enums.js';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: DefaultUserRole[]) => SetMetadata(ROLES_KEY, roles);