import { AutoIncrement, Column, CreatedAt, DataType, DeletedAt, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { SchoolType } from "src/shared/enum/school-type.enum";

@Table({paranoid : true})
export class School extends Model<School> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id : number;
    @Column({allowNull : false})
    name : string;
    @Column({allowNull : false, type: DataType.ENUM(SchoolType.academy,SchoolType.school,SchoolType.university), defaultValue : SchoolType.school})
    type : string;
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
