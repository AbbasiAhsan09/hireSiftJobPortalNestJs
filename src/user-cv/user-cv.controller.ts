import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserCvService } from './user-cv.service';
import { CreateUserCvDto } from './dto/create-user-cv.dto';
import { UpdateUserCvDto } from './dto/update-user-cv.dto';

@Controller('user-cv')
export class UserCvController {
  constructor(private readonly userCvService: UserCvService) {}

  @Post()
  create(@Body() createUserCvDto: CreateUserCvDto) {
    return this.userCvService.create(createUserCvDto);
  }

  @Get()
  findAll() {
    return this.userCvService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userCvService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserCvDto: UpdateUserCvDto) {
    return this.userCvService.update(+id, updateUserCvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userCvService.remove(+id);
  }
}
