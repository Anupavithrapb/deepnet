// models/MenuItem.js

const mongoose = require('mongoose');

// Define the schema for a menu item
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ['food', 'drink', 'brunch'], // Restrict category to these options
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String, // Optional field for storing image URL if needed
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt timestamps
});

module.exports = mongoose.model('MenuItem', menuItemSchema);

