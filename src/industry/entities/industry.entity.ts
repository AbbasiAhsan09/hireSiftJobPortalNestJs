import { AutoIncrement, Column, CreatedAt, DataType, DeletedAt, HasMany, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { Employer } from "src/employer/entities/employer.entity";

@Table
export class Industry extends Model<Industry> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id : number;
    @Column
    industry : string;
    @Column({type : DataType.TEXT, field : 'description', allowNull : true})
    description : string;
    @CreatedAt
    @Column
    createdAt : Date;
    @UpdatedAt
    @Column
    updatedAt : Date;
    @DeletedAt
    @Column
    deletedAt : Date;
    @HasMany(() => Employer)
    employers : Employer[];
}
