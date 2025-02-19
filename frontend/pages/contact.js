import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <form className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 border rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}