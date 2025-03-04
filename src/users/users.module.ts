import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Group } from '../groups/group.model';
import { UserGroup } from './user-group.model';
import { User } from './user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [SequelizeModule.forFeature([User, UserGroup, Group])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
