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
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
