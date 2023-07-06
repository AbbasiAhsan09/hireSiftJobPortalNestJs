import { Test, TestingModule } from '@nestjs/testing';
import { UserAcademicService } from './user-academic.service';

describe('UserAcademicService', () => {
  let service: UserAcademicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAcademicService],
    }).compile();

    service = module.get<UserAcademicService>(UserAcademicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
