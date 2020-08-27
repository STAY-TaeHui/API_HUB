const {deleteShuttleTimeDAO} = require('../../dao/shuttle/ShuttleTime_D_dao')

const deleteShuttleTime = async (req,res)=>{
    try {
        console.log("This is deleteShuttleTime in services");
        
        const data = req.body;
        const result = await deleteShuttleTimeDAO(data);
        return res.json({RESULT:result});
    } catch (e) {
        console.log("services ERROR"+e);
        res.status(400).json(e);
    }
};
module.exports = {deleteShuttleTime};