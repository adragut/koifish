import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Koi Fish Store</h1>
          <p className="text-lg text-gray-600">
            Discover our beautiful collection of koi fish and find the perfect one for your pond.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;