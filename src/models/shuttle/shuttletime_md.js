module.exports = (sequelize, DataTypes) => {
    var shuttle_time_df = sequelize.define(
        'shuttle_time',
        {
            BUS_ID:{
                type:DataTypes.INTEGER(11),
                allowNull:false
            },
            CODE:{
                type:DataTypes.STRING(10),
                allowNull:false,
                primaryKey:true,
            },
            LINE_NAME:{
                type:DataTypes.STRING(30),
                allowNull:false,
                primaryKey:true,
            },
            SEQUENCE:{
                type:DataTypes.INTEGER(11),
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
            tableName:"shuttle_time",
            freezeTableName: true,
            timestamps:false,
        }
    );
    return shuttle_time_df;
}