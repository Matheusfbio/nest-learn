import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@email.com' })
  email: string;

  @ApiPropertyOptional({ example: 'John Doe' })
  name?: string;

  @ApiProperty({ example: 'strongpassword123' })
  password: string;
}
