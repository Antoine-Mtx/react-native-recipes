import { Model, DataTypes } from 'sequelize';
import { db } from '../db/database';

class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public avatarUrl!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    avatarUrl: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize: db,
    tableName: 'users',
    timestamps: true,
    underscored: true
  }
);

export default User;

    