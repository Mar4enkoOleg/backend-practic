import {
  BelongsToMany,
  Column,
  ForeignKey,
  Model,
  Table
} from 'sequelize-typescript'
import { DataType } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { Role } from 'src/roles/roles.model'
import { User } from 'src/users/users.model'

@Table({ tableName: 'user_role', createdAt: false, updatedAt: false })
export class UserRole extends Model<UserRole> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  roleId: number

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userID: number
}
