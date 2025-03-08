import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Group } from '../groups/group.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async createUser(user: CreateUserDto) {
    const { email, username, name } = user;
    const [createdUser] = await this.userModel.upsert(
      {
        email,
        username,
        name,
        passwordHash: '',
      },
      {
        conflictFields: ['email', 'username'],
        conflictWhere: {
          email,
          username,
        },
      },
    );

    return createdUser;
  }

  async findAll() {
    return this.userModel.findAll({ include: Group });
  }

  async findOne(id: number) {
    return this.userModel.findByPk(id, { include: Group });
  }

  async update(id: number, { name }: UpdateUserDto) {
    const user = await this.findOne(id);
    if (user) {
      return user.update({ name });
    }
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (user) {
      return user.destroy();
    }
  }

  async assignGroup(userId: number, groupId: number) {
    const user = await this.userModel.findByPk(userId);
    const group = await Group.findByPk(groupId);
    if (user && group) {
      await user.$add('groups', group);
    }
  }
}
