import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is CrowdCap?",
      answer: "CrowdCap is a platform that connects investors with small and medium enterprises (SMEs) to support their growth through flexible funding opportunities."
    },
    {
      question: "How do I start investing?",
      answer: "Simply sign up for an investor account, browse available investment opportunities, and select the assets that match your interests and goals."
    },
    {
      question: "What types of SMEs can raise funds on CrowdCap?",
      answer: "CrowdCap supports a variety of SMEs, including agriculture, logistics, manufacturing, and technology businesses, among others."
    },
    {
      question: "Is my investment secure?",
      answer: "CrowdCap implements rigorous checks and transparent reporting to help you make informed decisions. However, as with all investments, there are risks, so please review each opportunity carefully."
    },
    {
      question: "How do SMEs benefit from CrowdCap?",
      answer: "CrowdCap provides SMEs with a platform to reach a wide audience of potential investors, enabling them to raise funds more efficiently and grow their business."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-emerald-600 mb-10">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 bg-white text-left focus:outline-none rounded-t"
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <span className="text-emerald-600">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-50 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
