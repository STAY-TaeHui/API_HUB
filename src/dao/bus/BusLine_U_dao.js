const db = require('../../../dbmodels/index');
const Op = db.Sequelize.Op;

const F_update = async(line_arr, data, len)=>{
    try {
        for(let i=1; i<=len; i++){
            console.log('index = '+i);
            let p_name;
            let u_name;
            await db.BusLine.findOne({
                attributes:['BUS_STOP_NAME'],
                where:{
                    BUS_LINE_NAME:data.lineName, LINE_SEQUENCE:i
                }
            })
            .then(async(result)=>{
                p_name= result.dataValues.BUS_STOP_NAME;
                console.log('p_name = '+p_name);
                u_name=line_arr[i-1];
                console.log('u_name = '+ u_name);
    
                if(p_name!=u_name){//서로 값이 다를때
                    console.log('다르다~~~~');
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
        db.BusLine.destroy({
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

const F_create = async (line_arr, data,record_c)=>{
    try {
        for(let i=record_c; i<line_arr.length; i++){
            await db.BusLine.create({
                BUS_LINE_NAME:data.lineName,
                LINE_SEQUENCE:i+1,
                BUS_STOP_NAME:line_arr[i]
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
        console.log('레코드는~~~~~~ '+record_c);

        if(record_c == line_arr.length){//수정하려는 레코드 수와 같을때 - Just Update
            console.log("=======")
            F_update(line_arr,data,record_c);

        }
        else if(record_c > line_arr.length){//수정하려는 레코드 수가 더 작을때 - Update / delete
            console.log(">>>>>>>>")
            
        db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');//FK제약조건 무시
            F_update(line_arr, data, line_arr.length);
            F_delete(line_arr,data);
            
        }
        else if(record_c < line_arr.length){//수정하려는 레코드 수가 더 클때 - Update / create
            console.log("<<<<<<<<<")
            F_update(line_arr, data, record_c);
            F_create(line_arr,data,record_c);
        }



        
    } catch (e) {
        throw e
    }
}
module.exports = {patchBusLineDAO}; 