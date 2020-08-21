var express = require('express');
var BusIndex = require('./BusRouter/bus');

const router = express.Router();

/* localhost:3000 주소로 접속 시 작동되는 라우터 */
router.use('/bus', BusIndex);{
  console.log("THIS IS INDEX");
};

module.exports = router;