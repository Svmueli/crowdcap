
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "CrowdCap has transformed how we invest!",
      author: "Investor",
    },
    {
      quote: "I found the perfect funding solution for my business!",
      author: "SME",
    },
    {
      quote: "Investing in my community has never been easier!",
      author: "Community Member",
    },
    {
      quote: "Thanks to CrowdCap, my dreams are becoming reality!",
      author: "Local Entrepreneur",
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-charcoal-gray">Success Stories</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 border rounded-lg bg-white shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <FaQuoteLeft className="text-emerald-600 text-3xl" />
              </div>
              <blockquote className="italic text-gray-600">
                "{testimonial.quote}"
              </blockquote>
              <p className="mt-4 font-semibold text-blue-500">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
