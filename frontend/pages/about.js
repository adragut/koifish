import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            At Koi Fish Store, we specialize in breeding and selling high-quality koi fish. Our team of experts ensures that every fish is healthy and vibrant. We take pride in providing exceptional customer service and helping you create the perfect aquatic environment.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}