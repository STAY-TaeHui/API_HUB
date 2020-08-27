const db = require('../../../dbmodels/index');

const deleteShuttleLineDAO = async(data)=>{
    try {
            db.ShuttleLine.destroy({
                where : {CODE: data.code, LINE_NAME: data.lineName}
            })
    } catch (e) {
        throw e
    }
}
module.exports = {deleteShuttleLineDAO};