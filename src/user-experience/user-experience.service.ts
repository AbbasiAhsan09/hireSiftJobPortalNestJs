import { Injectable } from '@nestjs/common';
import { CreateUserExperienceDto } from './dto/create-user-experience.dto';
import { UpdateUserExperienceDto } from './dto/update-user-experience.dto';

@Injectable()
export class UserExperienceService {
  create(createUserExperienceDto: CreateUserExperienceDto) {
    return 'This action adds a new userExperience';
  }

  findAll() {
    return `This action returns all userExperience`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userExperience`;
  }

  update(id: number, updateUserExperienceDto: UpdateUserExperienceDto) {
    return `This action updates a #${id} userExperience`;
  }

  remove(id: number) {
    return `This action removes a #${id} userExperience`;
  }
}
