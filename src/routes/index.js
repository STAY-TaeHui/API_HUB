var express = require('express');
var BusIndex = require('./BusRouter/bus');
var ShuttleIndex = require('./ShuttleRouter/shuttle')

const router = express.Router();

router.use('/bus', BusIndex);
router.use('/shuttle', ShuttleIndex);

module.exports = router;