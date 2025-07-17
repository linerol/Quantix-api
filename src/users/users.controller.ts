import { Controller, Get, Patch, Delete, Body, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Utilisateur')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @ApiOperation({ summary: 'Récupérer le profil de l\'utilisateur actuel' })
  @ApiResponse({ status: 200, description: 'Profil utilisateur' })
  async getMe(@CurrentUser() user: any) {
    const userData = await this.usersService.findById(user.userId);
    if (userData) {
      const userObj = JSON.parse(JSON.stringify(userData));
      delete userObj.password;
      return userObj;
    }
    return null;
  }

  @Patch('me/password')
  @ApiOperation({ summary: 'Modifier le mot de passe de l\'utilisateur actuel' })
  @ApiResponse({ status: 200, description: 'Mot de passe modifié' })
  async updatePassword(@CurrentUser() user: any, @Body('newPassword') newPassword: string) {
    await this.usersService.updatePassword(user.userId, newPassword);
    return { message: 'Mot de passe modifié' };
  }

  @Delete('me')
  @ApiOperation({ summary: 'Supprimer le compte utilisateur actuel' })
  @ApiResponse({ status: 204, description: 'Compte supprimé' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteMe(@CurrentUser() user: any) {
    await this.usersService.delete(user.userId);
    return;
  }
} 