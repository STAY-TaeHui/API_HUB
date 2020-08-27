const {patchBusTimeDAO} = require('../../dao/bus/BusTime_dao');
const {testPatchBusTimeDAO} = require('../../dao/bus/BusTime_dao test')
const patchBusTime = async (req,res)=>{
    try {
        console.log("This is getBustTime in services");
        
        const data = req.body;
        //const result = await patchBusTimeDAO(data);
        const result = await testPatchBusTimeDAO(data);
        return res.json({RESULT:result});
    } catch (e) {
        console.log("services ERROR"+e);
        res.status(400).json(e);
    }
    
};
module.exports = {patchBusTime};