const {deleteBusLineDAO} = require('../../dao/bus/BusLine_D_dao')

const deleteBusLine = async (req,res)=>{
    try {
        console.log("This is postBustLine in services");
        
        const data = req.body;
        const result = await deleteBusLineDAO(data);
        return res.json({BUS_Line:result});
    } catch (e) {
        console.log("services ERROR"+e);
    }
};
module.exports = {deleteBusLine};