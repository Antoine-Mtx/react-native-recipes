import { Model, DataTypes } from 'sequelize';
import { db } from '../db/database';

class Comment extends Model {
  public id!: number;
  public text!: string;
  public authorId!: number;
  public recipeId!: number;
  public createdAt!: Date;
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    text: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    authorId: {
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
    tableName: 'comments',
    timestamps: true,
    underscored: true
  }
);

export default Comment;
