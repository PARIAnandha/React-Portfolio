import React, { useState } from 'react';

const Bot = () => {
  const [isOpen, setIsOpen] = useState(false); 

 
  const toggleMessageBox = () => {
    setIsOpen(!isOpen);
  };

 
  const handleSendMessage = () => {

    setIsOpen(false); 
  };

  return (
    <>
      {/* Chatbot Icon */}
      <div
        className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce"
        onClick={toggleMessageBox}
      >
        <ion-icon name="chatbubble-ellipses"></ion-icon>
      </div>

      {/* Popup Message Box */}
      {isOpen && (
        <div className="fixed bottom-20 sm:right-8 right-4 z-[999] w-80 bg-gray-800 text-white rounded-lg shadow-lg p-4">
          <h4 className="text-lg font-semibold mb-2">Chat with Us</h4>
          <textarea
            className="w-full h-24 p-2 bg-gray-700 text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-cyan-600"
            placeholder="Type your message..."
          ></textarea>
          <button
            className="mt-2 w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-all"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      )}
    </>
  );
};

export default Bot;
