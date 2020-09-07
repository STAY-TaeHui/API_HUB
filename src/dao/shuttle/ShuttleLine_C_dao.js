const db = require('../../../dbmodels/index');

const postShuttleLineDAO = async(data)=>{
    try {
        ID_MAX = await db.ShuttleTime.max('BUS_ID')+1;
        for(let i=1; i<=data.data.length; i++){
            await db.ShuttleLine.create({
                CODE:data.code,
                LINE_NAME:data.lineName,
                SEQUENCE:i,
                SHUTTLE_STOP_NAME:data.data[i-1]
            })
            .then(async (result)=> 
            await db.ShuttleTime.create(
                {
                    BUS_ID:ID_MAX,
                    CODE:data.code,
                    LINE_NAME:data.lineName,
                    IDX_BUS_LINE:result.dataValues.IDX,
                    BUS_TIME:0,
                    SEQUENCE : i
                }
            )
            .then(()=> {
            })
            .catch((e)=>{
                throw e
            }))
            .catch((e)=> {throw e})
        }
        
    } catch (e) {
        throw e
    }
};
module.exports = {postShuttleLineDAO}