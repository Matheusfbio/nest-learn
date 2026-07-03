import { ApiProperty } from '@nestjs/swagger';

export class SigninDto {
  @ApiProperty({ example: 'user@email.com' })
  email: string;

  @ApiProperty({ example: 'strongpassword123' })
  password: string;
}
