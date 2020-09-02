const db = require('../../../dbmodels/index');

const patchShuttleTimeDAO = async(data)=>{
    try {
        let timeList = data.timeList;
        let info = data.info;
        let seq;
        for(let i=0; i<timeList.length; i++){
            var check = await db.ShuttleTime.count({
                where:{
                    BUS_ID:timeList[i].BUS_ID,
                    IDX_BUS_LINE: timeList[i].IDX_BUS_LINE
                }
            }).catch((e)=>{throw e})
            
            seq = await db.ShuttleLine.findOne({
                attributes:['SEQUENCE'],
                where:{
                    IDX:timeList[i].IDX_BUS_LINE
                }
            }).catch((e)=>{throw e})

            if(check==0){
                await db.ShuttleTime.create({
                    BUS_ID:timeList[i].BUS_ID,
                    CODE:info.code,
                    LINE_NAME:info.lineName,
                    SEQUENCE:seq.dataValues.SEQUENCE,
                    BUS_TIME:timeList[i].BUS_TIME,
                    IDX_BUS_LINE:timeList[i].IDX_BUS_LINE,
                })
            }
            else{
                await db.ShuttleTime.update(
                    {
                        BUS_TIME:timeList[i].BUS_TIME
                    },
                    {
                        where:{
                            BUS_ID : timeList[i].BUS_ID,
                            IDX_BUS_LINE: timeList[i].IDX_BUS_LINE
                        }
                    }
                ).then((result) => console.log(result))
                .catch((e)=> {throw e})
            }
        }
        
    } catch (e) {
        throw e
    }
    
}
module.exports = {patchShuttleTimeDAO}