import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY || '', // Replace with your own secret key
      signOptions: { expiresIn: '60s' }, // Token expiration time
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
