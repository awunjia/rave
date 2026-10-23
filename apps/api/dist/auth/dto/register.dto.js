var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsEmail, IsString, MaxLength, MinLength, Matches, IsOptional, IsIn, } from 'class-validator';
export class RegisterDto {
    name;
    email;
    locale;
    password;
}
__decorate([
    IsString(),
    MinLength(2),
    MaxLength(100),
    __metadata("design:type", String)
], RegisterDto.prototype, "name", void 0);
__decorate([
    IsEmail(),
    MaxLength(254),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    IsOptional(),
    IsIn(['en', 'fr']),
    __metadata("design:type", String)
], RegisterDto.prototype, "locale", void 0);
__decorate([
    IsString(),
    MinLength(8, {
        message: 'Password must be at least 8 characters long.',
    }),
    MaxLength(72, {
        message: 'Password must not exceed 72 characters.',
    }),
    Matches(/[A-Z]/, {
        message: 'Password must contain at least one uppercase letter.',
    }),
    Matches(/[a-z]/, {
        message: 'Password must contain at least one lowercase letter.',
    }),
    Matches(/[0-9]/, {
        message: 'Password must contain at least one number.',
    }),
    Matches(/[^A-Za-z0-9]/, {
        message: 'Password must contain at least one special character.',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
//# sourceMappingURL=register.dto.js.map