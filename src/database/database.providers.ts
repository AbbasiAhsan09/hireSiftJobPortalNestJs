import { Sequelize } from 'sequelize-typescript';
import { City } from 'src/city/entities/city.entity';
import { Country } from 'src/country/entities/country.entity';
import { Employer } from 'src/employer/entities/employer.entity';
import { Industry } from 'src/industry/entities/industry.entity';
import { State } from 'src/state/entities/state.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect:'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
      sequelize.addModels([
        Country,
        State,
        City,
        Industry,
        Employer
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];