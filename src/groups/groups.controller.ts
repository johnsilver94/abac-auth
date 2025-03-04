import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  async createGroup(@Body() group: CreateGroupDto) {
    return this.groupsService.createGroup(group);
  }

  @Get()
  async getGroups() {
    return this.groupsService.findAll();
  }

  @Get(':id')
  async getGroup(@Param('id') id: number) {
    return this.groupsService.findOne(id);
  }

  @Patch(':id')
  async updateGroup(@Param('id') id: number, @Body() group: UpdateGroupDto) {
    return this.groupsService.update(id, group);
  }

  @Delete(':id')
  async deleteGroup(@Param('id') id: number) {
    return this.groupsService.delete(id);
  }
}
