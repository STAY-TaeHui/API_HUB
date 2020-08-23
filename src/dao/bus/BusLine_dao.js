const db = require('../../../dbmodels/index');

const postBusLineDAO = async(data)=>{
    try {
        var sequence=1; //LINE_SEQUENCE는 들어가는 순서대로 sequence가 매게지기 때문에 1부터 배열 끝까지 증가하는 변수임
        const result = await data.data.forEach(i => {
        db.BusLine.create({
            BUS_LINE_NAME : data.lineName,
            LINE_SEQUENCE : sequence,
            BUS_STOP_NAME : i
           })
           .then(console.log("성공"))
            .catch((e)=>{
            throw e;
        })
        sequence++;
        })
        return result;
        
        
    } catch (e) {
        throw e
    }
}
module.exports = {postBusLineDAO};