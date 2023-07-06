import { AutoIncrement, Column, CreatedAt, DataType, DeletedAt, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { CVType } from "src/shared/enum/cv-type.enum";
import { Status } from "src/shared/enum/status.enum";
import { User } from "src/user/entities/user.entity";

@Table({tableName : 'user_resumes'})
export class UserCv extends Model<UserCv> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id : number;
    @ForeignKey(() => User)
    @Column({allowNull : false})
    userId : number;
    @Column({allowNull : false, type : DataType.ENUM(CVType.doc,CVType.image,CVType.pdf)})
    type : string;
    @Column({allowNull : false})
    cv : string;
    @Column({allowNull : false , type : DataType.ENUM(Status.active,Status.inActive), defaultValue : Status.active})
    isActive : string;
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
