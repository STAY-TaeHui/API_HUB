var express = require('express');
var BusIndex = require('./BusRouter/bus');

var router = express.Router();

/* localhost:3000 주소로 접속 시 작동되는 라우터 */
router.use('/bus', BusIndex);{
  // mdbConn.createConnection()
  //   .then((rows) => { 
  //     console.log("getUserLIST INDEX JSON");
  //     res.json({rows}) }) // 쿼리 결과가 JSON 형태로 출력됨
  //   .catch((err) => { console.error(err); });
  console.log("THIS IS INDEX");
  //res.json({message:"THIS IS INDEX"});
};

module.exports = router;