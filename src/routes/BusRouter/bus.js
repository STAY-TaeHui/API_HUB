const {getBusTime} = require('../../services/bus/BusTime copy');
const {patchBusTime} = require('../../services/bus/BusTime');

var express = require('express');
const router = express.Router();

/* localhost:3000 주소로 접속 시 작동되는 라우터 */
router.get('/time', getBusTime);
router.patch('/time/update',patchBusTime);
//router.patch('line', getBusLine)

module.exports = router;