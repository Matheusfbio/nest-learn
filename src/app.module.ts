import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [AuthModule, UserModule, DatabaseModule],
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class AppModule {}
