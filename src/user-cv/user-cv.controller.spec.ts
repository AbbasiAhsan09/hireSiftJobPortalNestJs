import { Test, TestingModule } from '@nestjs/testing';
import { UserCvController } from './user-cv.controller';
import { UserCvService } from './user-cv.service';

describe('UserCvController', () => {
  let controller: UserCvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCvController],
      providers: [UserCvService],
    }).compile();

    controller = module.get<UserCvController>(UserCvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
