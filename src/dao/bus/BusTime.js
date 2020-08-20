const {BusTime, Sequelize} = require('../../models/bustime');
const BusTime_MD = require('../../models/bustime');

const getBusTimeDAO = async(req,res)=>{
    try {
        
    console.log("This is getBusTimeDAO");
    const result = "HELLO FUCKSHIT"
    return result;
    } catch (error) {
        console.log(error);
    }
    
    // try {
    //     const result = await BusTime.findAll();
    //     return result;
    // } catch (error) {
    //     console.long(error);
    // }
}
module.exports = {getBusTimeDAO};
