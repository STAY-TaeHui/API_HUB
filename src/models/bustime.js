const { sequelize } = require("../../dbmodels");
const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'bus_time',
        {
            BUS_ID:{
                type:DataTypes.INTEGER(11),
                allowNull:false,
                uniquie:true,
            },
            WEEK_OF_DAY:{
                type:DataTypes.STRING(10),
                allowNull:false,
            },
            BUS_TIME:{
                type:DataTypes.TIME,
                allowNull:false,
            },
            IDX_BUS_LINE:{
                type:DataTypes.INTEGER(11),
                allowNull:false,

            }
        }
    )
}