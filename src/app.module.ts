import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database-module.module';
import { ConfigModule } from '@nestjs/config';
import { CityModule } from './city/city.module';
import { StateModule } from './state/state.module';
import { CountryModule } from './country/country.module';
import { EmployerModule } from './employer/employer.module';
import { IndustryModule } from './industry/industry.module';
import { UserRolesModule } from './user-roles/user-roles.module';
import { UserModule } from './user/user.module';
import { UserExperienceModule } from './user-experience/user-experience.module';
import { DesignationModule } from './designation/designation.module';

@Module({
  imports: [
  DatabaseModule,
  ConfigModule.forRoot({
    envFilePath : '.env',
  }),
  CityModule,
  StateModule,
  CountryModule,
  EmployerModule,
  IndustryModule,
  UserRolesModule,
  UserModule,
  UserExperienceModule,
  DesignationModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
