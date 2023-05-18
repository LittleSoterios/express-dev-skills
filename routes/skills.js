var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controller/skills')


router.get('/', skillsCtrl.index)
router.get(`/:id`, skillsCtrl.show)
module.exports = router;