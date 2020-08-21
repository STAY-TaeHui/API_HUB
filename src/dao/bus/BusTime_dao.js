const {BusTime} = require('../../models/bus/bustime_md');
const db = require('../../../dbmodels/index');
const {Op} = require('sequelize').Op;

const patchBusTimeDAO = async(data)=>{
    try {
    console.log("This is patchBusTimeDAO");
    return console.log(data);
    const result = await db.BusTime.findAll();
    return result;
    } catch (e) {
        console.log("daoERROR"+e);
        throw e;
    }
}
module.exports = {patchBusTimeDAO};
