import { AutoIncrement, Column, CreatedAt, DeletedAt, HasMany, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { UserExperience } from "src/user-experience/entities/user-experience.entity";

@Table({tableName : 'designations'})
export class Designation extends Model<Designation>{
    @PrimaryKey
    @AutoIncrement
    @Column
    id : number;
    @Column({allowNull : false})
    designation : string;
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
