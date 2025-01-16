import React from 'react';

const phoneNumber = "541156379430"
const WhatsAppIcon = ({ phoneNumber }) => {
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-whatsapp-green rounded-full flex items-center justify-center text-white text-xl cursor-pointer">
        <i className="fab fa-whatsapp"></i>
      </div>
    </a>
  );
};

export default WhatsAppIcon;
