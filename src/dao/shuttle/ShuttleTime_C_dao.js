const db = require('../../../dbmodels/index');

const postShuttleTimeDAO = async(data)=>{
   
    try {
        console.log("This is postShuttleTimeDAO");
        ID_MAX = await db.ShuttleTime.max('BUS_ID') +1;
        data.timeList.every(async(value,i) =>{
            try {
                await db.ShuttleTime.create(
                    {
                        BUS_ID:ID_MAX,
                        CODE:data.day,
                        LINE_NAME:data.lineName,
                        IDX_BUS_LINE:value.IDX_BUS_LINE,
                        BUS_TIME:value.VALUE,
                        SEQUENCE : i+1
                    }
                )
                .then(()=> {
                })
                .catch((e)=>{
                    throw e
                })
            } catch (e) {
                throw e
            }
        })
    }
    catch(e){
        throw e
    }
}
module.exports = {postShuttleTimeDAO};
