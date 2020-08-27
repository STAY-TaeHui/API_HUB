const db = require('../../../dbmodels/index');

const patchShuttleLineDAO = async(data)=>{//update를 쓰기엔 무리가 있어 노선을 통으로 지우고 다시 생성
    try {
        db.ShuttleLine.destroy({
            where : {CODE: data.code, LINE_NAME: data.lineName}
        })
        for(let i=1; i<=data.data.length; i++){
            await db.ShuttleLine.create({
                CODE:data.code,
                LINE_NAME:data.lineName,
                SEQUENCE:i,
                SHUTTLE_STOP_NAME:data.data[i-1]
            })
            .then((result)=> result)
            .catch((e)=> {throw e})
        }
    } catch (e) {
        throw e
    }
}
module.exports = {patchShuttleLineDAO};