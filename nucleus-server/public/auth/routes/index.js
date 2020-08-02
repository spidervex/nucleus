var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

const debugLog = require('debug')('base');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(401);
  res.end();
});


router.post('/login', async (req, res, next) => {
  const users = await req.db.user.find({email: req.body.email}).lean().exec();
  debugLog('users found', users[0])

  const tokenData = {
    userId: users[0]._id,
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 365)
  };

  const token = jwt.sign(
      tokenData,
      'someSecretKey',
      { algorithm: 'HS512'});
  res.json({token: token});
});

module.exports = router;
