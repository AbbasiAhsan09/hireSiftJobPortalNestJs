import {  AutoIncrement, Column, CreatedAt, DataType, DeletedAt, ForeignKey, HasOne, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { Designation } from "src/designation/entities/designation.entity";
import { Employer } from "src/employer/entities/employer.entity";

@Table({tableName : 'user_experiences'})
export class UserExperience extends Model<UserExperience> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id : number;
    @ForeignKey(() => Employer)
    @Column({allowNull : true })
    employerId : number;
    @Column({allowNull : true})
    employerName : string;
    @ForeignKey(() => Designation)
    @Column({allowNull : false})
    designationId:  string;
    @Column({allowNull : false , type : DataType.DATEONLY})
    startDate : Date;
    @Column({allowNull : true , type : DataType.DATEONLY})
    endDate : Date;
    @Column({type : DataType.TEXT})
    description : string;
    @Column({allowNull : false , defaultValue : false, type : DataType.BOOLEAN})
    hireSiftHelps : boolean;
    @CreatedAt
    @Column
    createdAt : Date;
    @UpdatedAt
    @Column
    updatedAt : Date;
    @DeletedAt
    @Column
    deletedAt : Date;
    // @BelongsTo(() => Designation)
    // designation : Designation;
    // @BelongsTo(() => Employer)
    // employer:  Employer;
}
