// controllers/menuController.js

const MenuItem = require('../Models/MenuItem');

// Controller function to create a new menu item
exports.createMenuItem = async (req, res) => {
  try {
    const menu = new MenuItem(req.body);
    await menu.save();
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get all menu items
// exports.getAllMenuItems = async (req, res) => {
//   try {
//     const menus = await MenuItem.find();
//     res.json(menus);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// controllers/menuController.js

exports.getAllMenuItems = async (req, res) => {
    const { category } = req.query;
    try {
      const filter = category ? { category } : {};
      const menuItems = await MenuItem.find(filter);
      res.json(menuItems);
    } catch (error) {
      res.status(500).json({ message: "Error fetching menu items" });
    }
  };
  
