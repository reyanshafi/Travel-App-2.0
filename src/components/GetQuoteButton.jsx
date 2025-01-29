import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';

const GetQuoteButton = ({ phoneNumber = '1234567890', message = 'Hello! I would like to get a quote.' }) => {
  const handleWhatsAppRedirect = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppRedirect}
      className="flex items-center gap-3 px-6 py-4 text-white transition-all bg-orange-500 rounded-xl hover:bg-orange-600"
    >
      <FiMessageSquare className="w-5 h-5" />
      <span>Get a Quote</span>
    </button>
  );
};

export default GetQuoteButton;
