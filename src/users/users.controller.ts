import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() body) {
    return this.usersService.createUser(body.name, body.email);
  }

  @Get()
  async getUsers() {
    return this.usersService.findAll();
  }

  @Post(':userId/groups/:groupId')
  async assignGroup(
    @Param('userId') userId: number,
    @Param('groupId') groupId: number,
  ) {
    return this.usersService.assignGroup(userId, groupId);
  }
}
