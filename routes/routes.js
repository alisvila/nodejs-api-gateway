var express = require('express');
var router = express.Router();
var serviceEcho = require('./services/service-echo');

// services
router.use(serviceEcho);

module.exports = router;