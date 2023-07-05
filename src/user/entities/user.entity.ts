import { AutoIncrement, BelongsTo, Column, CreatedAt, DataType, DeletedAt, ForeignKey, HasOne, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { UserRole } from "src/user-roles/entities/user-role.entity";

@Table
export class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id : number;
    @Column({allowNull : false})
    firstName : string;
    @Column({allowNull : true})
    middleName : string;
    @Column({allowNull : false})
    lastName : string;
    @Column({allowNull : false})
    email : string;
    @Column({allowNull : false, type : DataType.DATEONLY})
    birthDate: Date;
    @Column({allowNull : true})
    phone : string;
    @Column({allowNull : false})
    password : string;
    @ForeignKey(() => UserRole)
    @Column({allowNull : true, defaultValue : null})
    roleId : number;
    @Column({allowNull : true})
    verifiedAt: Date;
    @CreatedAt
    @Column
    createdAt : Date;
    @UpdatedAt
    @Column
    updatedAt : Date;
    @DeletedAt
    @Column
    deletedAt : Date;
    @BelongsTo(() => UserRole)
    userRole : UserRole;
}
