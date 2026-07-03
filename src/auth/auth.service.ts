/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { SigninDto } from './dto/signin.dto';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signin(params: SigninDto): Promise<{ access_token: string }> {
    const user = await this.userService.user({ email: params.email });
    if (!user) throw new NotFoundException('User not found');
    const passwordMatch = await bcrypt.compare(params.password, user.password);
    if (!passwordMatch) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: user.id };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
