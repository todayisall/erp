import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'cookie' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ example: '言萧凡' })
  username: string;

  @ApiProperty({ example: 'cookie' })
  enName?: string;

  @IsNotEmpty()
  @ApiProperty({ example: '' })
  email: string;

  @ApiProperty({ example: '' })
  avatar?: string;

  @ApiProperty({ example: '' })
  mobile?: string;

  @IsNotEmpty()
  departmentId: number;
}
