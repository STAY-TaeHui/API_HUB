const {postBusLineDAO} = require('../../dao/bus/BusLine_C_dao')

const postBusLine = async (req,res)=>{
    try {
        console.log("This is postBustLine in services");
        
        const data = req.body;
        const result = await postBusLineDAO(data);
        return res.json({BUS_Line:result});
    } catch (e) {
        console.log("services ERROR"+e);
    }
};
module.exports = {postBusLine};