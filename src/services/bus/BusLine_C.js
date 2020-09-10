const {postBusLineDAO} = require('../../dao/bus/BusLine_C_dao')

const postBusLine = async (req,res)=>{
    try {
        console.log("This is postBustLine in services");
        
        const data = req.body;
        const result = await postBusLineDAO(data,res);
        return res.json({RESULT:result});
    } catch (e) {
        console.log("services ERROR"+e);
        res.status(400).json(e);
    }
};
module.exports = {postBusLine};