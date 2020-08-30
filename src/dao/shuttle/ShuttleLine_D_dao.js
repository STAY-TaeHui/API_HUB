const db = require('../../../dbmodels/index');

const deleteShuttleLineDAO = async(data)=>{
    try {
        await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');//FK제약조건 무시
            await db.ShuttleLine.destroy({
                where : {CODE: data.code, LINE_NAME: data.lineName}
            })
        db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');//FK제약조건 무시

    } catch (e) {
        throw e
    }
}
module.exports = {deleteShuttleLineDAO};