const {getBusTimeDAO} = require('../../dao/bus/BusTime_dao copy');
// const BusTime = require('../../models/bustime');
var express = require('express');

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