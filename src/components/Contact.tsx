import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-start">
        {/* Left Section - Contact Info */}
        <div className="w-full sm:w-1/2 pr-8 mb-12 sm:mb-0">
          <h2 className="text-3xl font-bold text-black mb-4 text-center sm:text-left">Get in Touch</h2>
          <p className="text-lg text-black mb-6 text-center sm:text-left">We would love to hear from you! Contact us for more details or inquiries about our services.</p>

          {/* Contact Info */}
          <div className="mb-6">
            <p className="flex items-center text-black mb-4">
              <FaMapMarkerAlt className="text-yellow-500 mr-3" /> 
              CrowdCap Headquarters, Nairobi, Kenya
            </p>
            <p className="flex items-center text-black mb-4">
              <FaPhoneAlt className="text-yellow-500 mr-3" />
              +254 700 000 000
            </p>
            <p className="flex items-center text-black mb-4">
              <FaEnvelope className="text-yellow-500 mr-3" />
              support@crowdcap.com
            </p>
          </div>

          <p className="text-lg text-black text-center sm:text-left">Call us or send us an email, and we'll get back to you as soon as possible. We are here to assist you!</p>
        </div>

        {/* Right Section - Subscribe Form */}
        <div className="w-full sm:w-1/2 p-8 rounded-lg shadow-lg bg-white border border-black">
          <h3 className="text-2xl font-bold text-black mb-4 text-center">Subscribe to our Newsletter</h3>
          <p className="text-lg text-black mb-4 text-center">Stay updated with our latest news, products, and offers by subscribing to our newsletter.</p>
          <form action="#" method="POST" className="text-center">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <button type="submit" className="w-full py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
