import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Permission } from '../permissions/permission.model';
import { Group } from './group.model';

@Table
export class GroupPermission extends Model {
  @ForeignKey(() => Group)
  @Column
  groupId: number;

  @ForeignKey(() => Permission)
  @Column
  permissionId: number;
}
