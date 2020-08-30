const db = require('../../../dbmodels/index');

const patchBusLineDAO = async(data)=>{//update를 쓰기엔 무리가 있어 노선을 통으로 지우고 다시 생성
    try {
        line_arr = data.data;

        const record_c = await db.BusLine.count({
            where:{BUS_LINE_NAME:data.lineName}
        })
        .then(()=>
        {console.log('카운트======'+record_c);})
        .catch((e)=>{
            console.log('COUNT ERROR');
            throw e;
        })

        if(record_c == line_arr.length){//수정하려는 레코드 수와 같을때

        }
        else if(record_c > line_arr.length){//수정하려는 레코드 수가 더 작을때

        }
        else if(record_c < line_arr.length){//수정하려는 레코드 수가 더 클때

        }




        for(let i=1; i<=line_arr.length; i++){
            let p_name;
            let u_name;
            await db.BusLine.findOne({
                attributes:['BUS_STOP_NAME'],
                where:{
                    BUS_LINE_NAME:data.lineName, LINE_SEQUENCE:i
                }
            })
            .then((result)=>{
                p_name= result.dataValues.BUS_STOP_NAME;
                console.log('p_name = '+p_name);
                u_name=line_arr[i-1];
                console.log('u_name = '+ u_name);

                if(p_name!=u_name){//서로 값이 다를때
                    console.log('같다~~~~');
                    // await db.BusLine.update(
                    //     {
                    //         BUS_STOP_NAME:line_arr[i-1]
                    //     },
                    //     {
                    //         where:{
                    //             BUS_LINE_NAME:data.lineName,
                    //             LINE_SEQUENCE:i
                    //         }
                    //     }
                    // )
                }
                else{//서로 값이 같을때
                    console.log('다르다@@@@@');
                    
                }
                

            })
            .catch((e)=> {throw e})
        }
    } catch (e) {
        throw e
    }
}
module.exports = {patchBusLineDAO}; 