const db = require('../../../dbmodels/index');

const postShuttleLineDAO = async(data)=>{
    try {
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
};
module.exports = {postShuttleLineDAO}