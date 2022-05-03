import { Sequelize } from 'sequelize';
import UserFactory from './user';

const env = process.env.NODE_ENV || 'development';
const config = require('~db/config.json')[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = {
  sequelize,
  Sequelize,
  User: UserFactory(sequelize)
};

export default db;
