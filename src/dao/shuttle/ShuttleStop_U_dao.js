const db = require('../../../dbmodels/index');

const patchShuttleStopDAO = async(data)=>{
    try {
        const result = await db.ShuttleStop.update({
            
            DETAIL: data.DETAIL,
            SHUTTLE_STOP_NAME: data.SHUTTLE_STOP_NAME,
            LATITUDE: data.LATITUDE,
            LONGITUDE: data.LONGITUDE
        },
            {
                where:{
                    SHUTTLE_STOP_NAME: data.SHUTTLE_STOP_NAME
                }
            })
           .then()
            .catch((e)=>{
            throw e;
        })
        return result;
    } catch (e) {
        throw e
    }
}
module.exports = {patchShuttleStopDAO};