
module.exports = (sequelize, DataTypes) => {
    var shuttle_stop_df = sequelize.define(
        'shuttle_stop',
        {
            IDX:{
                type:DataTypes.INTEGER(11),
                allowNull:false,
                autoIncrement: true,
                uniquie:true,
                primaryKey:true,
            },
            SHUTTLE_STOP_NAME:{
                type:DataTypes.STRING(30),
                allowNull:false,
                primaryKey:true,
            },
            DETAIL:{
                type:DataTypes.STRING(5),
                allowNull:true,
                primaryKey:true,
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
            
        },{
            tableName:"shuttle_stop",
            freezeTableName: true,
            timestamps:false,
            
        }
    );
    return shuttle_stop_df;
}