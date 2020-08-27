const {patchShuttleStopDAO} = require('../../dao/shuttle/ShuttleStop_U_dao')

const patchShuttleStop = async (req,res)=>{
    try {
        console.log("This is postBustLine in services");
        
        const data = req.body;
        const result = await patchShuttleStopDAO(data);
        return res.json({RESULT:result});
    } catch (e) {
        console.log("services ERROR"+e);
        res.status(400).json(e);
    }
};
module.exports = {patchShuttleStop};