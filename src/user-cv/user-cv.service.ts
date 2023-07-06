import { Injectable } from '@nestjs/common';
import { CreateUserCvDto } from './dto/create-user-cv.dto';
import { UpdateUserCvDto } from './dto/update-user-cv.dto';

@Injectable()
export class UserCvService {
  create(createUserCvDto: CreateUserCvDto) {
    return 'This action adds a new userCv';
  }

  findAll() {
    return `This action returns all userCv`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userCv`;
  }

  update(id: number, updateUserCvDto: UpdateUserCvDto) {
    return `This action updates a #${id} userCv`;
  }

  remove(id: number) {
    return `This action removes a #${id} userCv`;
  }
}
