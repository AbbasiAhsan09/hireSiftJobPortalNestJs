import { AutoIncrement, BelongsTo, Column, CreatedAt, DeletedAt, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { State } from "src/state/entities/state.entity";

@Table
export class City extends Model<City>{
    @PrimaryKey
    @AutoIncrement
    @Column
    id : number;
    @ForeignKey(() => State)
    @Column
    stateId : number;
    @Column 
    countryCode : string;
    @Column
    stateCode : string;
    @Column
    city : string;
    @Column
    postalCode : number;
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
    @BelongsTo(() => State)
    state : State;
}
