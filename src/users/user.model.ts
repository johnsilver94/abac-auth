import {
  BelongsToMany,
  Column,
  DataType,
  DeletedAt,
  Index,
  Model,
  Table,
} from 'sequelize-typescript';
import { Group } from '../groups/group.model';
import { UserGroup } from './user-group.model';

@Table({ timestamps: true, paranoid: true })
export class User extends Model {
  @Index({ name: 'email_username_index', unique: true })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  })
  email: string;

  @Index({ name: 'email_username_index', unique: true })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [3, 30],
      notEmpty: true,
    },
  })
  username: string;

  @Column({ type: DataType.STRING, allowNull: false })
  passwordHash: string;

  @Column
  name: string;

  @BelongsToMany(() => Group, () => UserGroup)
  groups: Group[];

  @DeletedAt
  @Column(DataType.DATE)
  deletedAt: Date;
}
