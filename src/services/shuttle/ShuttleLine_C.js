const {postShuttleLineDAO} = require('../../dao/shuttle/ShuttleLine_C_dao')

const postShuttleLine = async (req,res)=>{
    try {
        console.log("This is postShuttleLine in services");
        
        const data = req.body;
        const result = await postShuttleLineDAO(data);
        return res.json({RESULT:result});
    } catch (e) {
        console.log("services ERROR"+e);
        res.status(400).json(e);
    }
};
module.exports = {postShuttleLine};