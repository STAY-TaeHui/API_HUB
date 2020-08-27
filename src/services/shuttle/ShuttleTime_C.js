const {postShuttleTimeDAO} = require('../../dao/shuttle/ShuttleTime_C_dao')

const postShuttleTime = async (req,res)=>{
    try {
        console.log("This is postShuttleTime in services");
        
        const data = req.body;
        const result = await postShuttleTimeDAO(data);
        return res.json({RESULT:result});
    } catch (e) {
        console.log("services ERROR"+e);
        res.status(400).json(e);
    }
};
module.exports = {postShuttleTime};