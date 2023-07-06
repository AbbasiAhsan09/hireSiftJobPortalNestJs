import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserAcademicService } from './user-academic.service';
import { CreateUserAcademicDto } from './dto/create-user-academic.dto';
import { UpdateUserAcademicDto } from './dto/update-user-academic.dto';

@Controller('user-academic')
export class UserAcademicController {
  constructor(private readonly userAcademicService: UserAcademicService) {}

  @Post()
  create(@Body() createUserAcademicDto: CreateUserAcademicDto) {
    return this.userAcademicService.create(createUserAcademicDto);
  }

  @Get()
  findAll() {
    return this.userAcademicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAcademicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserAcademicDto: UpdateUserAcademicDto) {
    return this.userAcademicService.update(+id, updateUserAcademicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAcademicService.remove(+id);
  }
}
