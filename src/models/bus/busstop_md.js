
module.exports = (sequelize, DataTypes) => {
    var bus_stop_df = sequelize.define(
        'bus_stop',
        {
            IDX:{
                type:DataTypes.INTEGER(11),
                allowNull:false,
                autoIncrement: true,
                uniquie:true,
                primaryKey:true,
            },
            BUS_STOP_NAME:{
                type:DataTypes.STRING(20),
                allowNull:false,
                primaryKey:true,
            },
            CODE:{
                type:DataTypes.STRING(5),
                allowNull:false,
                primaryKey:true,
            },
            BOADRING_LOCATION:{
                type:DataTypes.STRING(10),
                allowNull:true,
            },
            LATITUDE:{
                type:DataTypes.DOUBLE(),
                allowNull:true,
                defaultValue:0
            },
            LONGITUDE:{
                type:DataTypes.DOUBLE(),
                allowNull:true,
                defaultValue:0
            },
            C_PRICE:{
                type:DataTypes.INTEGER(11),
                allowNull:true,
                defaultValue:0
            },
            A_PRICE:{
                type:DataTypes.INTEGER(11),
                allowNull:true,
                defaultValue:0
            },
            
        },{
            tableName:"bus_stop",
            freezeTableName: true,
            timestamps:false,
            
        }
    );
    return bus_stop_df;
}