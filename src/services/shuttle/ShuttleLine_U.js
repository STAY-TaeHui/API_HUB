const {patchShuttleLineDAO} = require('../../dao/shuttle/ShuttleLine_U_dao')

const patchShuttleLine = async (req,res)=>{
    try {
        console.log("This is patchShuttleLine in services");
        
        const data = req.body;
        const result = await patchShuttleLineDAO(data);
        return res.json({RESULT:result});
    } catch (e) {
        console.log("services ERROR"+e);
        res.status(400).json(e);
    }
};
module.exports = {patchShuttleLine};