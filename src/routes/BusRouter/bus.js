const {getBusTime} = require('../../services/bus/BusTime copy');
const {patchBusTime} = require('../../services/bus/BusTime');
const {postBusLine} = require('../../services/bus/BusLine')

var express = require('express');
const router = express.Router();

/* localhost:3000 주소로 접속 시 작동되는 라우터 */
router.get('/time', getBusTime);//BusTime 조회
router.patch('/time/update',patchBusTime);//Bus Time 수정
router.post('/line/create',postBusLine)//Bus Line 추가
module.exports = router;