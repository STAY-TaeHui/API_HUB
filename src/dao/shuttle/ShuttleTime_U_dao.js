const db = require('../../../dbmodels/index');

const patchShuttleTimeDAO = async(data)=>{
    try {
        let timeList = data.timeList
        for(let i=0; i<timeList.length; i++){
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
        
    } catch (e) {
        throw e
    }
    
}
module.exports = {patchShuttleTimeDAO}