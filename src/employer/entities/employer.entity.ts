import { AutoIncrement, Column, CreatedAt, DataType, DeletedAt, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { City } from "src/city/entities/city.entity";
import { Country } from "src/country/entities/country.entity";
import { Industry } from "src/industry/entities/industry.entity";
import { State } from "src/state/entities/state.entity";

@Table
export class Employer extends Model<Employer> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id : number;
    @Column
    companyName : string;
    @Column
    logo  : string;
    @Column({allowNull : true})
    favicon : string;
    @Column
    coverImage : string;
    @Column({type:DataType.TEXT})
    description : string;
    @ForeignKey(() => Industry)
    @Column
    industryId : number;
    @ForeignKey(()=>Country)
    countryId : number;
    @ForeignKey(() => State)
    stateId : number;
    @ForeignKey(() => City)
    cityId : number;
    @Column
    address : string;
    @Column
    companySize : string;
    @Column
    companyEmail : string;
    @Column
    companyTel : string;
    @Column
    companyMobile : string;
    @Column
    companyWebsite : string;
    @CreatedAt
    @Column
    createdAt : Date;
    @UpdatedAt
    @Column
    updatedAt : Date;
    @DeletedAt
    @Column
    deletedAt : Date;

}
