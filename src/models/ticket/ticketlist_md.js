
module.exports = (sequelize, DataTypes) => {
    var ticket_list_df = sequelize.define(
        'ticket_list',
        {
            TICKET_ID:{
                type:DataTypes.INTEGER(11),
                allowNull:false,
                uniquie:true,
                primaryKey:true,
            },
            STUDENT_ID:{
                type:DataTypes.STRING(8),
                allowNull:false,
            },
            BUS_ID:{
                type:DataTypes.INTEGER(11),
                allowNull:false,
            },
            START:{
                type:DataTypes.STRING(20),
                allowNull:false,
            },
            END:{
                type:DataTypes.STRING(20),
                allowNull:false,
            },
            TICKET_DATE:{
                type:DataTypes.DATEONLY,
                allowNull:false,
            },
            TICKET_TIME:{
                type:DataTypes.TIME,
                allowNull:false,
            },
            RESERVATION_DATE:{
                type:DataTypes.DATE,
                allowNull:false,
            },
            SEAT:{
                type:DataTypes.INTEGER(11),
                allowNull:false,
            },
            BOARDING:{
                type:DataTypes.STRING(10),
                allowNull:false,
            },
            PRICE:{
                type:DataTypes.INTEGER(11),
                allowNull:false,
            },
        },{
            tableName:"ticket_list",
            freezeTableName: true,
            timestamps:false,
            
        }
    );
    return ticket_list_df;
}