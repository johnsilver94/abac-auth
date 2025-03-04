import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PermissionsService } from './permissions.service';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  async createPermission(@Body() permission: CreatePermissionDto) {
    return this.permissionsService.createPermission(permission);
  }

  @Get()
  async getPermissions() {
    return this.permissionsService.findAll();
  }

  @Get(':id')
  async getPermission(@Param('id') id: number) {
    return this.permissionsService.findOne(id);
  }

  @Patch(':id')
  async updatePermission(
    @Param('id') id: number,
    @Body() permission: UpdatePermissionDto,
  ) {
    return this.permissionsService.update(id, permission);
  }

  @Delete(':id')
  async deletePermission(@Param('id') id: number) {
    return this.permissionsService.remove(id);
  }
}
