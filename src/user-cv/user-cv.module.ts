import { Module } from '@nestjs/common';
import { UserCvService } from './user-cv.service';
import { UserCvController } from './user-cv.controller';

@Module({
  controllers: [UserCvController],
  providers: [UserCvService]
})
export class UserCvModule {}
