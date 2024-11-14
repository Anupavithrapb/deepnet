

const mongoose = require('mongoose');


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
    enum: ['food', 'drink', 'brunch'], 
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String, 
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('MenuItem', menuItemSchema);

