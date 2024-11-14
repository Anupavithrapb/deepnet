

const MenuItem = require('../Models/MenuItem');

exports.createMenuItem = async (req, res) => {
  try {
    const menu = new MenuItem(req.body);
    await menu.save();
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



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
  
