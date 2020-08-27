const db = require('../../../dbmodels/index');

const deleteShuttleTimeDAO = async(data)=>{
    try {
        await data.delList.forEach( (i)=>{
            db.ShuttleTime.destroy({
                where : {BUS_ID : i}
            })
        })
    } catch (e) {
        throw e
    }
}
module.exports = {deleteShuttleTimeDAO};