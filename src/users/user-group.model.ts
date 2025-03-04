import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Group } from '../groups/group.model';
import { User } from './user.model';

@Table
export class UserGroup extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Group)
  @Column
  groupId: number;
}
