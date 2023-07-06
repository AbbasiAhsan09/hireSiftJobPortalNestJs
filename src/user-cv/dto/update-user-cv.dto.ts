import { PartialType } from '@nestjs/swagger';
import { CreateUserCvDto } from './create-user-cv.dto';

export class UpdateUserCvDto extends PartialType(CreateUserCvDto) {}
