
module.exports = (sequelize, DataTypes) => {
    var bus_stop_df = sequelize.define(
        'bus_stop',
        {
            IDX:{
                type:DataTypes.INTEGER(11),
                allowNull:false,
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
            },
            LONGITUDE:{
                type:DataTypes.DOUBLE(),
                allowNull:true,
            },
            C_PRICE:{
                type:DataTypes.INTEGER(11),
                allowNull:true,
            },
            A_PRICE:{
                type:DataTypes.INTEGER(11),
                allowNull:true,
            },
            
        },{
            tableName:"bus_stop",
            freezeTableName: true,
            timestamps:false,
            
        }
    );
    return bus_stop_df;
}