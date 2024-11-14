

const express = require('express');
const router = express.Router();
const menuController = require('../Controller/menuController');


router.post('/menuitem', menuController.createMenuItem);


router.get('/menu', menuController.getAllMenuItems);

module.exports = router;
