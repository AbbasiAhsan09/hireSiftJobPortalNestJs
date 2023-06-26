import { AutoIncrement, BelongsTo, Column, CreatedAt, DeletedAt, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { Country } from "src/country/entities/country.entity";

@Table
export class State extends Model<State> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id : number;
    @ForeignKey(() => Country)
    @Column
    countryId : number;
    @Column
    state:string;
    @Column
    stateCode : string;
    @Column
    lat : number;
    @Column
    lng : number;
    @CreatedAt
    @Column
    createdAt : Date;
    @UpdatedAt
    @Column
    updatedAt : Date;
    @DeletedAt
    @Column
    deletedAt : Date;
    @BelongsTo(() => Country)
    country : Country;
}
