// routes/menu.js

const express = require('express');
const router = express.Router();
const menuController = require('../Controller/menuController');

// Route to create a new menu item
router.post('/menuitem', menuController.createMenuItem);

// Route to get all menu items
router.get('/menu', menuController.getAllMenuItems);

module.exports = router;
