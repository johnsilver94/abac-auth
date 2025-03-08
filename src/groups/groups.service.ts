import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Permission } from 'src/permissions/permission.model';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './group.model';

@Injectable()
export class GroupsService {
  constructor(@InjectModel(Group) private groupModel: typeof Group) {}

  async createGroup(createGroupDto: CreateGroupDto) {
    return this.groupModel.create({ ...createGroupDto });
  }

  async findAll() {
    return this.groupModel.findAll({
      include: [
        {
          model: Permission,
          as: 'permissions',
        },
      ],
    });
  }

  async findOne(id: number) {
    return this.groupModel.findByPk(id, {
      include: [
        {
          model: Permission,
          as: 'permissions',
        },
      ],
    });
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    const group = await this.findOne(id);

    if (group) {
      await group.update({ name: updateGroupDto.name });
      await group.$set('permissions', updateGroupDto.permissions);

      return this.findOne(id);
    }
  }

  async delete(id: number) {
    const group = await this.findOne(id);
    if (group) {
      return group.destroy();
    }
  }
}
