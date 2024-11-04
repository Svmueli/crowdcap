
export default function Footer() {
    return (
      <footer className="py-4 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <p>© 2024 CrowdCap. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="/about" className="hover:underline">About</a>
            <a href="/faq" className="hover:underline">FAQs</a>
            <a href="/contact" className="hover:underline">Contact Us</a>
          </div>
          <div className="mt-2">
            <a href="/terms" className="hover:underline">Terms of Service</a>
            <span className="mx-2">|</span>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </footer>
    );
  }
  