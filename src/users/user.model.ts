import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { Group } from '../groups/group.model';
import { UserGroup } from './user-group.model';

@Table
export class User extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @BelongsToMany(() => Group, () => UserGroup)
  groups: Group[];
}
