import { AutoIncrement, Column, CreatedAt, DataType, DeletedAt, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { RoleLevel } from "src/shared/enum/role-level.enum";

@Table({tableName : 'user_roles', paranoid : true})
export class UserRole extends Model<UserRole> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id : number;
    @Column({allowNull : false})
    name : string;
    @Column
    description : string;
    @Column({allowNull : false, type : DataType.ENUM(RoleLevel.hiresift,RoleLevel.normal,RoleLevel.organization)})
    level : 'hire-sift | organization | normal';
    @Column({allowNull : true})
    order:  number;
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
