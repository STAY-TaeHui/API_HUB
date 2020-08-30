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
        db.ShuttleLine.destroy({
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

const F_create = async (line_arr, data,record_c)=>{
    try {
        for(let i=record_c; i<line_arr.length; i++){
            await db.ShuttleLine.create({
                LINE_NAME:data.lineName,
                SEQUENCE:i+1,
                SHUTTLE_STOP_NAME:line_arr[i],
                CODE:data.code
            })
            .catch((e)=>{throw e})
        }
    } catch (error) {
        
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
        console.log('레코드는~~~~~~ '+record_c);

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