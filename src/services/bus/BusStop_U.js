const {patchBusStopDAO} = require('../../dao/bus/BusStop_U_dao')

const patchBusStop = async (req,res)=>{
    try {
        console.log("This is postBustLine in services");
        
        const data = req.body;
        const result = await patchBusStopDAO(data);
        return res.json({RESULT:result});
    } catch (e) {
        console.log("services ERROR"+e);
        res.status(400).json(e);
    }
};
module.exports = {patchBusStop};