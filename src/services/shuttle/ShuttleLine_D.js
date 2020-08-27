const {deleteShuttleLineDAO} = require('../../dao/shuttle/ShuttleLine_D_dao')

const deleteShuttleLine = async (req,res)=>{
    try {
        console.log("This is deleteShuttleLine in services");
        
        const data = req.body;
        const result = await deleteShuttleLineDAO(data);
        return res.json({RESULT:result});
    } catch (e) {
        console.log("services ERROR"+e);
        res.status(400).json(e);
    }
};
module.exports = {deleteShuttleLine};