import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './permission.model';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectModel(Permission) private permissionModel: typeof Permission,
  ) {}

  async createPermission(createPermissionDto: CreatePermissionDto) {
    return this.permissionModel.create({ ...createPermissionDto });
  }

  async findAll() {
    return this.permissionModel.findAll();
  }

  async findOne(id: number) {
    return this.permissionModel.findByPk(id);
  }

  async update(id: number, { name }: UpdatePermissionDto) {
    const permission = await this.findOne(id);
    if (permission) {
      return permission.update({ name });
    }
  }

  async remove(id: number) {
    const permission = await this.findOne(id);
    if (permission) {
      return permission.destroy();
    }
  }
}
