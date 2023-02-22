import { Model, DataTypes } from 'sequelize';
import { db } from '../db/database';

class Recipe extends Model {
  id!: number;
  title!: string;
  description!: string;
  ingredients!: string[];
  steps!: string[];
  imageUrl!: string;
  authorId!: number;
  createdAt!: Date;
}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    steps: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: db,
    tableName: 'recipes',
    timestamps: true,
    underscored: true,
  }
);

export default Recipe;
