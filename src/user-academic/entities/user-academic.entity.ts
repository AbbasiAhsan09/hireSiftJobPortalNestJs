import { AutoIncrement, Column, CreatedAt, DataType, DeletedAt, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { School } from "src/school/entities/school.entity";
import { User } from "src/user/entities/user.entity";

@Table({tableName : 'user_academics'})
export class UserAcademic  extends Model<UserAcademic>{
    @PrimaryKey
    @AutoIncrement
    @Column
    id : number;
    @Column({allowNull : false})
    degreeName : string;
    @ForeignKey(() => School)
    @Column({allowNull : true})
    schoolId : number;
    @Column({allowNull : true})
    schoolName : string;
    @Column({allowNull : false,type : DataType.DATEONLY})
    startDate : Date;
    @Column({type : DataType.DATEONLY, allowNull : true})
    endDate : Date;
    @ForeignKey(() => User)
    @Column({allowNull : false})
    userId : number;
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
