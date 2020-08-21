var dotenv = require('dotenv').config();
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.BusTime = require('../src/models/bus/bustime_md')(sequelize,Sequelize);//models폴더의 모델들 등록


module.exports = db;