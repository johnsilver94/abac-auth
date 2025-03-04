import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { Permission } from '../permissions/permission.model';
import { UserGroup } from '../users/user-group.model';
import { User } from '../users/user.model';
import { GroupPermission } from './group-permission.model';

@Table
export class Group extends Model {
  @Column
  name: string;

  @BelongsToMany(() => User, () => UserGroup)
  users: User[];

  @BelongsToMany(() => Permission, () => GroupPermission)
  permissions: Permission[];
}
