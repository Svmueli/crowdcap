
import { FaArrowRight } from 'react-icons/fa';

export default function Button({ text, primary, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 flex items-center font-semibold rounded-md transition-all 
        ${primary ? 'bg-emerald-600 text-white' : 'bg-yellow-500 text-gray-800'} 
        hover:scale-105 hover:shadow-lg`}
    >
      {text}
      <FaArrowRight className="ml-2" />
    </button>
  );
}
