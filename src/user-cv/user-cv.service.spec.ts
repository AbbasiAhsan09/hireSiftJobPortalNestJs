import { Test, TestingModule } from '@nestjs/testing';
import { UserCvService } from './user-cv.service';

describe('UserCvService', () => {
  let service: UserCvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCvService],
    }).compile();

    service = module.get<UserCvService>(UserCvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
