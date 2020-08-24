const db = require('../../../dbmodels/index');
const Op = db.Sequelize.Op;

const postBusStopDAO = async(data)=>{
    try {
        const result = await db.BusStop.create({
            A_PRICE: data.A_PRICE,
            BOARDING_LOCATION: data.BOARDING_LOCATION,
            BUS_STOP_NAME: data.BUS_STOP_NAME,
            CODE: data.CODE,
            C_PRICE: data.C_PRICE,
            LATITUDE: data.LATITUDE,
            LONGITUDE: data.LONGITUDE
           }
           )
           .then()
            .catch((e)=>{
            throw e
        })
        return result;
    } catch (e) {
        console.log("dao오류");
        throw e
    }
}
module.exports = {postBusStopDAO};