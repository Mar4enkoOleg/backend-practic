import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript'
import { DataType } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { Role } from 'src/roles/roles.model'
import { UserRole } from 'src/user-role/user-role.model'

interface UserAttributes {
  email: string
  password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserAttributes> {
  @ApiProperty({ example: '1', description: 'Unique identity' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number

  @ApiProperty({ example: 'example@example.com', description: 'Email address' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string

  @ApiProperty({ example: 'abc123', description: 'Password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string

  @ApiProperty({ example: 'false', description: 'Boolean value(banned user)' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean

  @ApiProperty({ example: 'No activity', description: 'Reason for bann' })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[]
}
