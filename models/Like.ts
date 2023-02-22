import { Model, DataTypes } from 'sequelize';
import { db } from '../db/database';

class Like extends Model {
  public id!: number;
  public userId!: number;
  public recipeId!: number;
  public createdAt!: Date;
}

Like.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    recipeId: {
      type: DataTypes.INTEGER.UNSIGNED,
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
    tableName: 'likes',
    timestamps: true,
    underscored: true
  }
);

export default Like;

  