
module.exports = (sequelize, DataTypes) => {
    var bus_line_df = sequelize.define(
        'bus_line',
        {
            IDX_BUS_LINE:{
                type:DataTypes.INTEGER(11),
                allowNull:false,
                uniquie:true,
                primaryKey:true,
            },
            BUS_LINE_NAME:{
                type:DataTypes.STRING(20),
                allowNull:false,
                primaryKey:true,
            },
            LINE_SEQUENCE:{
                type:DataTypes.INTEGER(11),
                allowNull:false,
                primaryKey:true,
            },
            BUS_STOP_NAME:{
                type:DataTypes.STRING(20),
                allowNull:false,

            }
        },{
            tableName:"bus_line",
            freezeTableName: true,
            timestamps:false,
            
        }
    );
    return bus_line_df;
}