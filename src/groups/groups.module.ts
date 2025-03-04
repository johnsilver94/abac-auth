import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Permission } from '../permissions/permission.model';
import { GroupPermission } from './group-permission.model';
import { Group } from './group.model';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';

@Module({
  imports: [SequelizeModule.forFeature([Group, GroupPermission, Permission])],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
