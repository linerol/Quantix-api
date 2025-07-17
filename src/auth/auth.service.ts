import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { UserDocument } from '../users/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const userObj = (user as UserDocument).toObject();
      delete userObj.password;
      return userObj;
    }
    return null;
  }

  async login(user: any) {
    const userId = user._id || user.id;
    const payload = { email: user.email, sub: userId };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: userId,
        email: user.email,
      },
    };
  }

  async register(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.usersService.create(email, hashedPassword);
    return this.login(user);
  }
} 