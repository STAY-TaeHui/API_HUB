const {patchShuttleTimeDAO} = require('../../dao/shuttle/ShuttleTime_U_dao')

const patchShuttleTime = async (req,res)=>{
    try {
        console.log("This is patchShuttleTime in services");
        
        const data = req.body;
        const result = await patchShuttleTimeDAO(data);
        return res.json({RESULT:result});
    } catch (e) {
        console.log("services ERROR"+e);
        res.status(400).json(e);
    }
};
module.exports = {patchShuttleTime};