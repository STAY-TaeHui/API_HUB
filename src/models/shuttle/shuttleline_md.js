
module.exports = (sequelize, DataTypes) => {
    var shuttle_line_df = sequelize.define(
        'shuttle_line',
        {
            IDX:{
                type:DataTypes.INTEGER(11),
                allowNull:false,
                autoIncrement: true,
                uniquie:true,
                primaryKey:true,
            },
            CODE:{
                type:DataTypes.STRING(10),
                allowNull:false,
            },
            LINE_NAME:{
                type:DataTypes.STRING(30),
                allowNull:false,
            },
            SEQUENCE:{
                type:DataTypes.INTEGER(11),
                allowNull:false,
            },
            SHUTTLE_STOP_NAME:{
                type:DataTypes.STRING(30),
                allowNull:false,

            }
        },{
            tableName:"shuttle_line",
            freezeTableName: true,
            timestamps:false,
            
        }
    );
    return shuttle_line_df;
}