import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({ example: 'example@example.com', description: 'Email address' })
  readonly email: string
  @ApiProperty({ example: 'abc123', description: 'password' })
  readonly password: string
}
