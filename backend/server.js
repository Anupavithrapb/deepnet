const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const menuRoutes = require('./Routes/menu');

const app = express();
app.use(cors());
app.use(express.json());

// Connection string with database name specified and without special characters in password
mongoose.connect('mongodb+srv://anupavithrapb:Anu%402000@cluster0.cauyb.mongodb.net/deepnet', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

app.use('/api', menuRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
