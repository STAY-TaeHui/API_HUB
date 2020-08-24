const {patchBusTimeDAO} = require('../../dao/bus/BusTime_dao');

const patchBusTime = async (req,res)=>{
    try {
        console.log("This is getBustTime in services");
        
        const data = req.body;
        const result = await patchBusTimeDAO(data);
        return res.json({RESULT:result});
    } catch (e) {
        console.log("services ERROR"+e);
        res.status(400).json(e);
    }
    
};
module.exports = {patchBusTime};