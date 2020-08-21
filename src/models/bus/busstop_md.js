
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
            BOADRING_LOCATION:{
                type:DataTypes.STRING(10),
                allowNull:false,
            },
            LATITUDE:{

            },
            LONGITUDE:{

            },
            PRICE:{

            },
            C_PRICE:{

            },
            CODE:{

            }
        },{
            tableName:"bus_time",
            freezeTableName: true,
            timestamps:false,
            
        }
    );
    return bus_time_df;
}