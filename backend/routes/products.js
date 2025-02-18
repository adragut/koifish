const express = require('express');
const router = express.Router();
const Product = require('../models/Product.js');

router.get('/', async (req, res) => {
  const { category, minPrice, maxPrice } = req.query;
  let query = {};
  if (category) query.category = category;
  if (minPrice) query.price = { $gte: minPrice };
  if (maxPrice) query.price = { ...query.price, $lte: maxPrice };

  try {
    const products = await Product.find(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;