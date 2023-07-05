import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserExperienceService } from './user-experience.service';
import { CreateUserExperienceDto } from './dto/create-user-experience.dto';
import { UpdateUserExperienceDto } from './dto/update-user-experience.dto';

@Controller('user-experience')
export class UserExperienceController {
  constructor(private readonly userExperienceService: UserExperienceService) {}

  @Post()
  create(@Body() createUserExperienceDto: CreateUserExperienceDto) {
    return this.userExperienceService.create(createUserExperienceDto);
  }

  @Get()
  findAll() {
    return this.userExperienceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userExperienceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserExperienceDto: UpdateUserExperienceDto) {
    return this.userExperienceService.update(+id, updateUserExperienceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userExperienceService.remove(+id);
  }
}
