var dotenv = require('dotenv').config();
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//models폴더의 모델들 등록
db.BusStop = require('../src/models/bus/busstop_md')(sequelize,Sequelize);
db.BusTime = require('../src/models/bus/bustime_md')(sequelize,Sequelize);
db.BusLine = require('../src/models/bus/busline_md')(sequelize,Sequelize);
db.TicketList = require('../src/models/ticket/ticketlist_md')(sequelize,Sequelize);

//관계정의 
    //BusStop 1 - M BusLine
db.BusStop.hasMany(db.BusLine, {foreignKey : 'BUS_STOP_NAME', sourceKey:'BUS_STOP_NAME'});
db.BusLine.belongsTo(db.BusStop,{foreignKey : 'BUS_STOP_NAME', targetKey:'BUS_STOP_NAME'});

    //BusLine 1 - M Bus_Time
db.BusLine.hasMany(db.BusTime, {foreignKey: 'IDX_BUS_LINE', sourceKey:'IDX_BUS_LINE'});
db.BusTime.belongsTo(db.BusLine, {foreignKey: 'IDX_BUS_LINE', targetKey:'IDX_BUS_LINE'});

    //BusTime 1 - M TicketList
db.BusTime.hasMany(db.TicketList, { foreignKey: 'BUS_ID', sourceKey:'BUS_ID'});
db.TicketList.belongsTo(db.BusTime, { foreignKey: 'BUS_ID', targetKey:'BUS_ID'});
db.BusTime.hasMany(db.TicketList, { foreignKey: 'TICKET_TIME', sourceKey:'BUS_TIME'});
db.TicketList.belongsTo(db.BusTime, { foreignKey: 'TICKET_TIME', targetKey:'BUS_TIME'});

module.exports = db;