var db = require('../../../dbmodels/index');
module.exports = (sequelize, DataTypes) => {
    var bus_time_df = sequelize.define(
        'bus_time',
        {
            BUS_ID:{
                type:DataTypes.INTEGER(11),
                allowNull:false,
                uniquie:true,
                primaryKey:true,
            },
            WEEK_OF_DAY:{
                type:DataTypes.STRING(10),
                allowNull:false,
                primaryKey:true,
            },
            BUS_TIME:{
                type:DataTypes.TIME,
                allowNull:false,
                primaryKey:true,
            },
            IDX_BUS_LINE:{
                type:DataTypes.INTEGER(11),
                allowNull:false,

            }
        },{
            tableName:"bus_time",
            freezeTableName: true,
            timestamps:false,
            
        }
    );
    bus_time_df.associate = function(db){
        db.BusTime.hasMany(db.TicketList,{foreignKey:'TICKET_TIME',onUpdate:'cascade'});
    }
    return bus_time_df;
}