const {postShuttleStopDAO} = require('../../dao/shuttle/ShuttleStop_C_dao')

const postShuttleStop = async (req,res)=>{
    try {
        console.log("This is postShuttleStop in services");
        
        const data = req.body;
        const result = await postShuttleStopDAO(data);
        return res.json({RESULT:result});
    } catch (e) {
        console.log("services ERROR"+e);
        res.status(400).json(e);
    }
};
module.exports = {postShuttleStop};