import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { GroupPermission } from '../groups/group-permission.model';
import { Group } from '../groups/group.model';

@Table
export class Permission extends Model {
  @Column
  name: string;

  @BelongsToMany(() => Group, () => GroupPermission)
  groups: Group[];
}
