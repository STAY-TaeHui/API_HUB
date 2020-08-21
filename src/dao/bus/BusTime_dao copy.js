const {BusTime} = require('../../models/bus/bustime_md');
const db = require('../../../dbmodels/index');
const {Op} = require('sequelize').Op;

const getBusTimeDAO = async(req,res)=>{
    try {
    console.log("This is getBusTimeDAO");
    const result = await db.BusTime.findAll();
    return result;
    } catch (e) {
        console.log("daoERROR"+e);
        throw e;
    }
}
module.exports = {getBusTimeDAO};
