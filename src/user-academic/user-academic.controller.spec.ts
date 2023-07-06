import { Test, TestingModule } from '@nestjs/testing';
import { UserAcademicController } from './user-academic.controller';
import { UserAcademicService } from './user-academic.service';

describe('UserAcademicController', () => {
  let controller: UserAcademicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAcademicController],
      providers: [UserAcademicService],
    }).compile();

    controller = module.get<UserAcademicController>(UserAcademicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
