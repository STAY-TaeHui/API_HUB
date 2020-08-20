const {getBusTimeDAO} = require('../../dao/bus/BusTime');
// const BusTime = require('../../models/bustime');
var express = require('express');
// var req = express.request;
// var res = express.response;
// const getBusTime = async (req, res) =>{
//     try {
//         const result = await getBusTimeDAO();
//         res.json({BUS_TIME : result});
//     } catch (error) {
//         res.json(error);
        
//     }
// }
const getBusTime = async (req,res)=>{
    try {
        console.log("This is getBustTime in services");
        const result = await getBusTimeDAO();
        res.json({BUS_TIME:result});
    } catch (e) {
        console.log("services ERROR"+e);
    }
    
};
module.exports = {getBusTime};