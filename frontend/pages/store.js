import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import ProductCard from '../components/ProductCard.js';
import axios from 'axios';
import { useState } from 'react';

export default function Store({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categoryFilter, setCategoryFilter] = useState('');

  const handleFilterChange = (e) => {
    const selectedCategory = e.target.value;
    setCategoryFilter(selectedCategory);

    if (selectedCategory === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === selectedCategory);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="py-10">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Our Koi Fish Collection</h1>

          {/* Filter Dropdown */}
          <div className="mb-4">
            <label htmlFor="category" className="font-bold mr-2">
              Filter by Category:
            </label>
            <select
              id="category"
              value={categoryFilter}
              onChange={handleFilterChange}
              className="px-4 py-2 border rounded"
            >
              <option value="">All</option>
              <option value="Premium">Premium</option>
              <option value="Standard">Standard</option>
              <option value="Rare">Rare</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get('http://localhost:5000/api/products');
  const products = response.data;
  return { props: { products } };
}