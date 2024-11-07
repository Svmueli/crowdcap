import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">About CrowdCap</h3>
          <p className="mt-4 text-gray-400">
            CrowdCap is a registered Kenyan company committed to connecting investors with small and medium enterprises, providing opportunities to support and grow local businesses.
          </p>
          <p className="mt-2 text-gray-400">© 2024 CrowdCap. All Rights Reserved.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="mt-4 text-gray-400">CrowdCap, Mombasa, Kenya</p>
          <p className="text-gray-400">P.O. Box 12345-00100</p>
          <p className="text-gray-400">Email: support@crowdcap.co.ke</p>
          <p className="text-gray-400">Phone: +254 700 000 000</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex mt-4 space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500">
        <p>© 2024 CrowdCap. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
