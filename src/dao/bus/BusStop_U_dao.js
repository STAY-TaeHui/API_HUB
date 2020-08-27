const db = require('../../../dbmodels/index');

const patchBusStopDAO = async(data)=>{
    try {
        const result = await db.BusStop.update({
            A_PRICE: data.A_PRICE,
            BOARDING_LOCATION: data.BOARDING_LOCATION,
            BUS_STOP_NAME: data.BUS_STOP_NAME,
            CODE: data.CODE,
            C_PRICE: data.C_PRICE,
            LATITUDE: data.LATITUDE,
            LONGITUDE: data.LONGITUDE
        },
            {
                where:{
                    IDX: data.IDX,
                    CODE: data.CODE
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
module.exports = {patchBusStopDAO};