import { AutoIncrement, Column, CreatedAt, DeletedAt, HasMany, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { State } from "src/state/entities/state.entity";

@Table
export class Country extends Model<Country> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id : number;
    @Column
    country : string;
    @Column
    countryCode : string;
    @Column({allowNull : true})
    lat : number;
    @Column({allowNull : true})
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
    @HasMany(() => State)
    state : State[];
}
