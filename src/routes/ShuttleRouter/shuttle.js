var {postShuttleStop} = require('../../services/shuttle/ShuttleStop_C')
var {patchShuttleStop} = require('../../services/shuttle/ShuttleStop_U')
var {postShuttleTime} = require('../../services/shuttle/ShuttleTime_C');
var {deleteShuttleTime} = require('../../services/shuttle/ShuttleTime_D');
var {postShuttleLine} = require('../../services/shuttle/ShuttleLine_C');
var {deleteShuttleLine} = require('../../services/shuttle/ShuttleLine_D');
var {patchShuttleLine} = require('../../services/shuttle/ShuttleLine_U');
var {patchShuttleTime} = require('../../services/shuttle/ShuttleTime_U');


var router = require('express').Router();

router.post('/stop/create',postShuttleStop);//정류장 생성
router.post('/stop/update',patchShuttleStop);//정류장 수정

router.post('/bus/create',postShuttleTime);//배차생성
router.post('/bus/delete',deleteShuttleTime);//배차삭제
router.post('/time/update',patchShuttleTime);//시간수정

router.post('/line/create',postShuttleLine);//노선 생성
router.post('/line/delete',deleteShuttleLine);//노선 삭제
router.post('/line/update',patchShuttleLine);//노선 수정


module.exports = router;