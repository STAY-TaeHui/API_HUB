const db = require('../../../dbmodels/index');
const Op = db.Sequelize.Op;

const F_update = async(line_arr, data, len)=>{
    try {
        for(let i=1; i<=len; i++){
            let p_name;
            let u_name;
            await db.BusLine.findOne({
                attributes:['BUS_STOP_NAME'],
                where:{
                    BUS_LINE_NAME : data.lineName,
                    LINE_SEQUENCE:i
                }
            })
            .then(async(result)=>{
                console.log(result);
                p_name= result.dataValues.BUS_STOP_NAME;
                u_name=line_arr[i-1];
    
                if(p_name!=u_name){//서로 값이 다를때
                    await db.BusLine.update(
                        {
                            BUS_STOP_NAME:line_arr[i-1]
                        },
                        {
                            where:{
                                BUS_LINE_NAME:data.lineName,
                                LINE_SEQUENCE:i
                            }
                        }
                    ).catch((e)=>{throw e})
                }
                else{//서로 값이 같을때
                    console.log('같다@@@@@');
                }
                
    
            })
            .catch((e)=> {throw e})
        }
    } catch (e) {
        throw e
    }
}

const F_delete = async (line_arr,data)=>{
    try {
        await db.BusLine.findAll({//필요없는 값인 데이터들을 삭제하기 전에 먼저 BusTime의 필요없는 값들을 삭제
            attributes:['IDX_BUS_LINE'],
            where:{
                BUS_LINE_NAME:data.lineName,
                LINE_SEQUENCE:{
                    [Op.gt]:line_arr.length
                }
            }
        }).then(
            async(i)=>{
            for(let a=0; a<i.length; a++){
                await db.BusTime.destroy({
                    where:{
                        IDX_BUS_LINE:i[a].dataValues.IDX_BUS_LINE
                    }
                })
                .catch((e)=>{throw e})
                
            }
        }
        )
        .catch((e)=>{throw e})

        await db.BusLine.destroy({//필요없는값들 삭제
            where:{
                BUS_LINE_NAME:data.lineName,
                LINE_SEQUENCE:{
                    [Op.gt]:line_arr.length
                }
            }
        })
        .catch((e)=> {throw e})
    } catch (e) {
        throw e
    }   
}

const F_create = async (line_arr, data, record_c)=>{
    try {
        ID_MAX = await db.BusTime.max('BUS_ID');
        
        for(let i=record_c; i<line_arr.length; i++){
            tmp=ID_MAX;
            await db.BusLine.create({
                BUS_LINE_NAME:data.lineName,
                LINE_SEQUENCE:i+1,
                BUS_STOP_NAME:line_arr[i]
            })
            .then(async(result)=>{
                for(let a=0; a<5; a++){
                    tmp++
                    switch (a){
                        case 0:
                        W_O_D = "Mon";
                        break;
                        case 1:
                        W_O_D = "Tue";
                        break;
                        case 2:
                        W_O_D = "Wed";
                        break;
                        case 3:
                        W_O_D = "Thu";
                        break;
                        case 4:
                        W_O_D = "Fri";
                        break;
                    };
                    
                        console.log(tmp)
                        console.log(W_O_D)
                        console.log(result.dataValues.IDX_BUS_LINE)
                        console.log();
                    
                    await db.BusTime.create({
                        BUS_ID:tmp,
                        WEEK_OF_DAY:W_O_D,
                        BUS_TIME:i,
                        IDX_BUS_LINE:result.dataValues.IDX_BUS_LINE
                    })
                    .then(()=>{'버스타임 크리에이트성공###'})
                    .catch((e)=>{throw e})
                }
            })
            .catch((e)=>{throw e})
        }
    } catch (error) {
        
    }
    
}
const patchBusLineDAO = async(data)=>{//update를 쓰기엔 무리가 있어 노선을 통으로 지우고 다시 생성
    try {
        line_arr = data.data;

        const record_c = await db.BusLine.count({
            where:{BUS_LINE_NAME:data.lineName}
        })
        .then((c)=>{return c})
        .catch((e)=>{
            console.log('COUNT ERROR');
            throw e;
        })

        if(record_c == line_arr.length){//수정하려는 레코드 수와 같을때 - Just Update
            F_update(line_arr,data,record_c);

        }
        else if(record_c > line_arr.length){//수정하려는 레코드 수가 더 작을때 - Update / delete
            
        db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');//FK제약조건 무시
            F_update(line_arr, data, line_arr.length);
            F_delete(line_arr,data);
            
        }
        else if(record_c < line_arr.length){//수정하려는 레코드 수가 더 클때 - Update / create
            F_update(line_arr, data, record_c);
            F_create(line_arr,data,record_c);
        }



        
    } catch (e) {
        throw e
    }
}
module.exports = {patchBusLineDAO}; 