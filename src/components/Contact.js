import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-emerald-600 mb-10">Contact Us</h2>

        {/* Flex Container for Contact Information and Form */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          {/* Contact Information */}
          <div className="flex-1 text-center lg:text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 mb-10">
              <div>
                <FaPhoneAlt className="text-emerald-600 text-3xl mb-4 mx-auto lg:mx-0" />
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-600">+254 ### ###</p>
              </div>
              <div>
                <FaEnvelope className="text-emerald-600 text-3xl mb-4 mx-auto lg:mx-0" />
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-600">mail@crowdcap.com</p>
              </div>
              <div>
                <FaMapMarkerAlt className="text-emerald-600 text-3xl mb-4 mx-auto lg:mx-0" />
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-600">123 Market Street, Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 lg:max-w-lg bg-gray-100 p-8 rounded shadow">
            <h3 className="text-2xl font-bold text-emerald-600 text-center mb-6">Get in Touch</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-2 rounded font-semibold hover:bg-emerald-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
