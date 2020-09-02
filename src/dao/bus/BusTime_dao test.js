const {BusTime} = require('../../models/bus/bustime_md');
const db = require('../../../dbmodels/index');
const e = require('express');

const testPatchBusTimeDAO = async(data)=>{
    try {
        console.log("This is patchBusTimeDAO");
        
        data.timeList.every( async (i) => {
            var W_O_D;
            
            await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');//FK제약조건 무시
            var ex_check = await db.BusTime.count({
                where : {
                    IDX_BUS_LINE:i.IDX_BUS_LINE
                }
            }).catch((e)=>{throw e})
            var BUS_ID_MAX = await db.BusTime.max('BUS_ID');
            
        switch (i.WEEK_OF_DAY){
            case 0:
            console.log(i.WEEK_OF_DAY+" - Mon");
            W_O_D = "Mon";
            break;
            case 1:
            console.log(i.WEEK_OF_DAY+" - Tue");
            W_O_D = "Tue";
            break;
            case 2:
            console.log(i.WEEK_OF_DAY+" - Wed");
            W_O_D = "Wed";
            break;
            case 3:
            console.log(i.WEEK_OF_DAY+" - Thu");
            W_O_D = "Thu";
            break;
            case 4:
            console.log(i.WEEK_OF_DAY+" - Fri");
            W_O_D = "Fri";
            break;
        };

        if(ex_check==0){
            await db.BusTime.create({
                BUS_ID:BUS_ID_MAX+1,
                IDX_BUS_LINE:i.IDX_BUS_LINE,
                WEEK_OF_DAY:W_O_D,
                BUS_TIME:i.BUS_TIME
            })
        }
        else{
            await db.BusTime.update(
                {
                BUS_TIME: i.BUS_TIME
            },
            {
                where:{
                    IDX_BUS_LINE:i.IDX_BUS_LINE,
                    WEEK_OF_DAY:W_O_D,
            }
            },{
                returning:true
            }        
            ).then((row)=>console.log(row[1]))
            .catch((e)=>{
                console.log("1")
                throw e;
            });
        }
        
        
    });//SET BUS_TIME= body.BUSTIME where IDX_BUS_LINE:i.IDX_BUS_LINE AND WEEK_OF_DAY:i.WEEK_OF_DAY
    
    // db.BusTime.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');    //FK제약조건 무시해제

    //throw Error
    } catch (e) {
        console.log("4");
        console.log("daoERROR"+e);
        throw e;
    }
    return 1;
}
module.exports = {testPatchBusTimeDAO};
