import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ description: 'Email de l\'utilisateur', example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Mot de passe de l\'utilisateur', example: 'password123', minLength: 6 })
  @IsString()
  @MinLength(6)
  password: string;
}

export class RegisterDto {
  @ApiProperty({ description: 'Email de l\'utilisateur', example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Mot de passe de l\'utilisateur', example: 'password123', minLength: 6 })
  @IsString()
  @MinLength(6)
  password: string;
}

export class AuthResponseDto {
  @ApiProperty({ description: 'Token JWT pour l\'authentification', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  access_token: string;

  @ApiProperty({ description: 'Informations de l\'utilisateur', example: { id: '507f1f77cf86cd79943911', email: 'user@example.com' } })
  user: {
    id: string;
    email: string;
  };
} 