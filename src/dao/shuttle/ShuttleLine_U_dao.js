const db = require('../../../dbmodels/index');
const Op = db.Sequelize.Op;

const F_update = async(line_arr, data, len)=>{
    try {
        for(let i=1; i<=len; i++){
            console.log('index = '+i);
            let p_name;
            let u_name;
            await db.ShuttleLine.findOne({
                attributes:['SHUTTLE_STOP_NAME'],
                where:{
                    LINE_NAME:data.lineName, SEQUENCE:i, CODE:data.code
                }
            })
            .then(async(result)=>{
                p_name= result.dataValues.SHUTTLE_STOP_NAME;
                u_name=line_arr[i-1];
    
                if(p_name!=u_name){//서로 값이 다를때
                    await db.ShuttleLine.update(
                        {
                            SHUTTLE_STOP_NAME:line_arr[i-1]
                        },
                        {
                            where:{
                                LINE_NAME:data.lineName,
                                SEQUENCE:i,
                                CODE:data.code
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
        await db.ShuttleLine.findAll({//필요없는 값인 데이터들을 삭제하기 전에 먼저 BusTime의 필요없는 값들을 삭제
            attributes:['IDX'],
            where:{
                LINE_NAME:data.lineName, 
                SEQUENCE:{
                    [Op.gt]:line_arr.length
                }
            }
        }).then(async(i)=>{
            for(let a=0; a<i.length; a++){
                await db.ShuttleTime.destroy({
                    where:{
                        IDX_BUS_LINE:i[a].dataValues.IDX
                    }
                })
                .catch((e)=>{throw e})
            }
        }
        )
        await db.ShuttleLine.destroy({
            where:{
                LINE_NAME:data.lineName,
                SEQUENCE:{
                    [Op.gt]:line_arr.length
                },
                CODE:data.code
            }
        })
        .catch((e)=> {throw e})
       
    } catch (e) {
        throw e
    }   
}

const F_create = async (line_arr, data,record_c)=>{//라인 생성 후 시간표도 생성
    try {
        ID_MAX = await db.ShuttleTime.max('BUS_ID');///////ㅆ:빨러마 이거 때매 안되는거니까 수정해라 ㅈ되기실흐염ㄴ
        
        for(var i=record_c; i<line_arr.length; i++){
            tmp=ID_MAX;
            await db.ShuttleLine.create({//라인 생성
                        LINE_NAME:data.lineName,
                        SEQUENCE:i+1,
                        SHUTTLE_STOP_NAME:line_arr[i],
                        CODE:data.code
                    })
            .then(async(result)=>{
                await db.ShuttleLine.findOne({//라인 생성 후 해당 IDX를 찾음
                    attributes:['IDX'],
                    where:{
                        LINE_NAME:data.lineName, SHUTTLE_STOP_NAME:line_arr[0], CODE:data.code
                    }
                })
                .then(async(id)=>{//해당 IDX의 갯수를 찾음
                    const count = await db.ShuttleTime.count({
                        where:{IDX_BUS_LINE:id.dataValues.IDX}
                    })
                        for(var a=0; a<count; a++){//갯수만큼 반복문을 돌며 시간표 생성해줌
                            tmp++;
                            function time_conv(num)
                            {
                                let hours = Math.floor(num/60);
                                let minutes = num%60;
                                let second = num/60%60;
                                return hours + ":" +minutes + ":"+second;
                            }
                            
                            await db.ShuttleTime.create({
                                BUS_ID:tmp,
                                BUS_TIME:time_conv(a),
                                CODE:data.code,
                                LINE_NAME:data.lineName,
                                SEQUENCE:i+1,
                                IDX_BUS_LINE:result.dataValues.IDX
                            })
                            .then(()=>{'버스타임 크리에이트성공###'})
                            .catch((e)=>{throw e})
                        }
                })
                .catch((e)=>{throw e})
                
                
                
            })
            .catch((e)=>{throw e})
        }
    } catch (e) {
        throw e
    }
}
const patchShuttleLineDAO = async(data)=>{//update를 쓰기엔 무리가 있어 노선을 통으로 지우고 다시 생성
    try {
        line_arr = data.data;

        const record_c = await db.ShuttleLine.count({
            where:{
                LINE_NAME:data.lineName, CODE:data.code
            }
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
module.exports = {patchShuttleLineDAO}; 