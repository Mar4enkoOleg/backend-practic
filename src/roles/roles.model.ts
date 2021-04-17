import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript'
import { DataType } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { User } from 'src/users/users.model'
import { UserRole } from 'src/user-role/user-role.model'

interface RoleAttributes {
  value: string
  description: string
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleAttributes> {
  @ApiProperty({ example: '1', description: 'Unique identity' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number

  @ApiProperty({ example: 'ADMIN', description: 'Role value' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string

  @ApiProperty({ example: 'Administrator', description: 'Role description' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string

  @BelongsToMany(() => User, () => UserRole)
  users: User[]
}
