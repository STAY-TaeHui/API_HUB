const {patchBusTimeDAO} = require('../../dao/bus/BusTime_dao');

const patchBusTime = async (req,res)=>{
    try {
        console.log("This is getBustTime in services");
        console.log(req.body); //body - CHECK
         //console.log(data);
        // const result = await patchBusTimeDAO(data);
        // res.json({BUS_TIME:result});
    } catch (e) {
        console.log("services ERROR"+e);
    }
    
};
module.exports = {patchBusTime};