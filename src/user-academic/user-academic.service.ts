import { Injectable } from '@nestjs/common';
import { CreateUserAcademicDto } from './dto/create-user-academic.dto';
import { UpdateUserAcademicDto } from './dto/update-user-academic.dto';

@Injectable()
export class UserAcademicService {
  create(createUserAcademicDto: CreateUserAcademicDto) {
    return 'This action adds a new userAcademic';
  }

  findAll() {
    return `This action returns all userAcademic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAcademic`;
  }

  update(id: number, updateUserAcademicDto: UpdateUserAcademicDto) {
    return `This action updates a #${id} userAcademic`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAcademic`;
  }
}
