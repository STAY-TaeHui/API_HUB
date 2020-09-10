const db = require('../../../dbmodels/index');


const postBusLineDAO = async(data,res)=>{
    try {
        var result=0;
        var sequence=1; //LINE_SEQUENCE는 들어가는 순서대로 sequence가 매게지기 때문에 1부터 배열 끝까지 증가하는 변수임
        var check = await db.BusLine.findOne({//먼저 body.lineName이 이미 DB에 존재하는지 검사하는 변수
            where:{BUS_LINE_NAME:data.lineName}
        })
        .catch((e)=>{throw e})

        if(!check)//        존재하지 않을때 생성
        {
                await data.data.forEach(async (i) => {
                    await db.BusLine.create({
                        BUS_LINE_NAME : data.lineName,
                        LINE_SEQUENCE : sequence,
                        BUS_STOP_NAME : i
                    })
                    .then(result++)
                        .catch((e)=>{
                        throw e;
                    })
                    sequence++;
                })
                console.log(result);     
        }
        else{ //        이미 존재하는 이름일때
              throw {ERROR:"이미 존재하는 노선입니다."};
        }
        
        
        return result;
    } catch (e) {
        throw e
    }
}
module.exports = {postBusLineDAO};