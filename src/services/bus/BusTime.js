const {patchBusTimeDAO} = require('../../dao/bus/BusTime_dao');

const patchBusTime = async (req,res)=>{
    try {
        console.log("This is getBustTime in services");
        
        const data = req.body;
        const result = await patchBusTimeDAO(data);
        return res.json({BUS_TIME:result});
    } catch (e) {
        console.log("services ERROR"+e);
    }
    
};
module.exports = {patchBusTime};