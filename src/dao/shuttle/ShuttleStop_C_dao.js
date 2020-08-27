const db = require('../../../dbmodels/index');
const Op = db.Sequelize.Op;

const postShuttleStopDAO = async(data)=>{
    try {
        const result = await db.ShuttleStop.create({
            DETAIL:data.DETAIL,
            LATITUDE: data.LATITUDE,
            LONGITUDE: data.LONGITUDE,
            SHUTTLE_STOP_NAME: data.SHUTTLE_STOP_NAME,
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
module.exports = {postShuttleStopDAO};