import { Module } from '@nestjs/common';
import { UserAcademicService } from './user-academic.service';
import { UserAcademicController } from './user-academic.controller';

@Module({
  controllers: [UserAcademicController],
  providers: [UserAcademicService]
})
export class UserAcademicModule {}
