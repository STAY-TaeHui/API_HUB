const db = require('../../../dbmodels/index');

const deleteShuttleLineDAO = async(data)=>{
    try {
        
        await db.ShuttleTime.destroy({
            where : {CODE: data.code, LINE_NAME: data.lineName}
        })    
        await db.ShuttleLine.destroy({
                where : {CODE: data.code, LINE_NAME: data.lineName}
            })

    } catch (e) {
        throw e
    }
}
module.exports = {deleteShuttleLineDAO};