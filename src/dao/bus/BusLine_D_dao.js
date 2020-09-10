const db = require('../../../dbmodels/index');

const deleteBusLineDAO = async(data)=>{
    try {
        db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');//FK제약조건 무시
       
        await db.BusLine.findAll({//필요없는 값인 데이터들을 삭제하기 전에 먼저 BusTime의 필요없는 값들을 삭제
            attributes:['IDX_BUS_LINE'],
            where:{
                BUS_LINE_NAME:data.lineName,
            }
        }).then(async (result)=>{
            var len = result.length
            for(i=0; i<len; i++){
                await db.BusTime.destroy({
                    where : { IDX_BUS_LINE : result[i].dataValues.IDX_BUS_LINE}
                })
                .catch((e)=>{throw e})
            }
        })
        const result = await db.BusLine.destroy({
            where : {BUS_LINE_NAME : data.lineName}
        })
        return result;
    } catch (e) {
        throw e
    }
}
module.exports = {deleteBusLineDAO};