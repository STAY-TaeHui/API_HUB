const db = require('../../../dbmodels/index');

const deleteBusLineDAO = async(data)=>{
    try {
        const result = await db.BusLine.destroy({
            where : {BUS_LINE_NAME : data.lineName}
        })
        console.log(data.lineName)
        return result;
    } catch (e) {
        throw e
    }
}
module.exports = {deleteBusLineDAO};