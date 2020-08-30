const {patchBusLineDAO} = require('../../dao/Bus/BusLine_U_dao')

const patchBusLine = async (req,res)=>{
    try {
        console.log("This is patchBusLine in services");
        
        const data = req.body;
        const result = await patchBusLineDAO(data);
        return res.json({RESULT:result});
    } catch (e) {
        console.log("services ERROR"+e);
        res.status(400).json(e);
    }
};
module.exports = {patchBusLine};