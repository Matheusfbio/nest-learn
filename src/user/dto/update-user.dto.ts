import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'user@email.com' })
  email?: string;

  @ApiPropertyOptional({ example: 'John Doe' })
  name?: string;

  @ApiPropertyOptional({ example: 'newpassword123' })
  password?: string;
}
