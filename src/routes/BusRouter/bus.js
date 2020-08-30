const {getBusTime} = require('../../services/bus/BusTime copy');
const {patchBusTime} = require('../../services/bus/BusTime');
const {postBusLine} = require('../../services/bus/BusLine_C');
const {deleteBusLine} = require('../../services/bus/BusLine_D');
const {postBusStop} = require('../../services/bus/BusStop_C')
const {patchBusStop} = require('../../services/bus/BusStop_U')
const {patchBusLine} = require('../../services/bus/BusLine_U')


var express = require('express');
const router = express.Router();

/* 웹에서 모두 post로 넘어오기 때문에 다 post */
router.get('/time', getBusTime);//BusTime 조회
router.post('/time/update',patchBusTime);//Bus Time 수정

router.post('/line/create',postBusLine)//Bus Line 추가
router.post('/line/update',patchBusLine)//Bus Line 수정
router.post('/line/delete',deleteBusLine)//Bus Line 삭제

router.post('/stop/create',postBusStop)//Bus Stop 추가
router.post('/stop/update',patchBusStop)//Bus Stop 수정

// router.post('/')

module.exports = router;