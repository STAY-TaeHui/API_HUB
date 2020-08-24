const {postBusStopDAO} = require('../../dao/bus/BusStop_C_dao')

const postBusStop = async (req,res)=>{
    try {
        console.log("This is postBustLine in services");
        
        const data = req.body;
        const result = await postBusStopDAO(data);
        return res.json({RESULT:result});
    } catch (e) {
        console.log("services ERROR"+e);
        res.status(400).json(e);
    }
};
module.exports = {postBusStop};