var {postShuttleStop} = require('../../services/shuttle/ShuttleStop_C')
var {patchShuttleStop} = require('../../services/shuttle/ShuttleStop_U')
var {postShuttleTime} = require('../../services/shuttle/ShuttleTime_C');
var {deleteShuttleTime} = require('../../services/shuttle/ShuttleTime_D');
var {postShuttleLine} = require('../../services/shuttle/ShuttleLine_C');
var {deleteShuttleLine} = require('../../services/shuttle/ShuttleLine_D');
var {patchShuttleLine} = require('../../services/shuttle/ShuttleLine_U');
var {patchShuttleTime} = require('../../services/shuttle/ShuttleTime_U');


var router = require('express').Router();

router.post('/stop/create',postShuttleStop);
router.post('/stop/update',patchShuttleStop);
router.post('/time/create',postShuttleTime);
router.post('/bus/delete',deleteShuttleTime);//원래 url /time/delete
router.post('/line/create',postShuttleLine);
router.post('/line/delete',deleteShuttleLine);
router.post('/line/update',patchShuttleLine);
router.post('/time/update',patchShuttleTime);

// router.post('/stop/update')

module.exports = router;