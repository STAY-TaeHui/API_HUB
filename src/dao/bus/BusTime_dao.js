const {BusTime} = require('../../models/bus/bustime_md');
const db = require('../../../dbmodels/index');
const e = require('express');
const {Op} = require('sequelize').Op;

const patchBusTimeDAO = async(data)=>{
    try {
       let result=0;
       var time = 1;
    console.log("This is patchBusTimeDAO");
    db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');    //FK제약조건 무시
    await data.timeList.forEach(i => { //FK조건때문에 time 현재 forEach에서 임의값으로 초기화 후 밑의 forEach에서 UPDATE진행 
        try {
            console.log("time - " + time);
            var W_O_D;
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
        console.log(time);
        db.BusTime.update(
            {
            BUS_TIME: time
        },
        {
            where:{
                IDX_BUS_LINE:i.IDX_BUS_LINE,
                WEEK_OF_DAY:W_O_D,
        }}
        );
        time=time+1;
        } catch (e) {
            console.log("3")
            throw e;
        }
    }//SET BUS_TIME= body.BUSTIME where IDX_BUS_LINE:i.IDX_BUS_LINE AND WEEK_OF_DAY:i.WEEK_OF_DAY
    );
    data.timeList.forEach(i => {
        try {
            var W_O_D;
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
        db.BusTime.update(
            {
            BUS_TIME: i.BUS_TIME
        },
        {
            where:{
                IDX_BUS_LINE:i.IDX_BUS_LINE,
                WEEK_OF_DAY:W_O_D,
        }}
        ).then(
            result++, console.log("병신"+result))
        .catch((e)=>{
            result--,console.log("신병"+result)
            console.log("1")
            throw e;
        })
        
        } catch (e) {
            console.log("2")
            throw e;
        }
        
        // console.log(i.BUS_TIME);
        // console.log(i.IDX_BUS_LINE);
        // console.log(i.WEEK_OF_DAY);
        // console.log("---------------------------------------------");
    }//SET BUS_TIME= body.BUSTIME where IDX_BUS_LINE:i.IDX_BUS_LINE AND WEEK_OF_DAY:i.WEEK_OF_DAY
    );
    
    // db.BusTime.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');    //FK제약조건 무시해제
    console.log("resutl"+result);
    return result;
    } catch (e) {
        console.log("daoERROR"+e);
        throw e;
    }
}
module.exports = {patchBusTimeDAO};
