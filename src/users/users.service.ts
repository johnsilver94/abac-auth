import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Group } from '../groups/group.model';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async createUser(name: string, email: string) {
    return this.userModel.create({ name, email });
  }

  async findAll() {
    return this.userModel.findAll({ include: Group });
  }

  async assignGroup(userId: number, groupId: number) {
    const user = await this.userModel.findByPk(userId);
    const group = await Group.findByPk(groupId);
    if (user && group) {
      await user.$add('groups', group);
    }
  }
}
