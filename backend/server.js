const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

console.log(process.env.MONGO_URI); 
// Connect to MongoDB
  mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Successfully'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Koi Fish Store API');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);