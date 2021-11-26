var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', {name: 'About'});
});

router.get ('/', function(req,res,next) {
  res.render('index',{name:'GAUTHAM MANOHAR'});
});


module.exports = router;
 