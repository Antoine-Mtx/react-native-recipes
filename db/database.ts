import { Sequelize } from 'sequelize';
import User from '../models/User';
import Comment from '../models/Comment';
import Recipe from '../models/Recipe';
import Like from '../models/Like';

const db = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD!, {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!, 10),
  dialect: 'postgres',
});

// Define model associations
User.hasMany(Comment, { foreignKey: 'authorId' });
User.hasMany(Like, { foreignKey: 'userId' });
User.hasMany(Recipe, { foreignKey: 'authorId' });
Comment.belongsTo(User, { foreignKey: 'authorId' });
Recipe.belongsTo(User, { foreignKey: 'authorId' });
Like.belongsTo(User, { foreignKey: 'userId' });
Like.belongsTo(Recipe, { foreignKey: 'recipeId' });
Comment.belongsTo(Recipe, { foreignKey: 'recipeId' });

// Synchronize the database with the models
db.sync();

export { db };
