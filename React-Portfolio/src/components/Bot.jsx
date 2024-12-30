import React, { useState } from 'react';

const Bot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState(''); // State to store the status message
  const [message, setMessage] = useState(''); // State to store the typed message

  const toggleMessageBox = () => {
    setIsOpen(!isOpen);
    setStatusMessage(''); // Reset status message when opening/closing the message box
  };

  const handleSendMessage = async () => {
    if (!message.trim()) {
      setStatusMessage('Please enter a message before sending.');
      return;
    }

    setStatusMessage('Sending...'); // Set status to "Sending..." while the request is being processed

    try {
      // Send a POST request to the Google Apps Script API with the message
      const response = await fetch('https://script.google.com/macros/s/AKfycbxG6dWoNzRShJBA0XxSg5zbMojMZgR0A1lZLqCFHCy38kdtCqQ6DTDC6L59VmYXglbA/exec', {
        method: 'POST',
        body: new URLSearchParams({
          message: message,  // Send the typed message to the API
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Ensure correct content type
        },
      });

      // Check if the response is OK
      if (response.ok) {
        setStatusMessage('Message sent successfully!'); // Set success message
        setIsOpen(false); // Close the message box after success
        setMessage(''); // Reset the message state
      } else {
        setStatusMessage('Failed to send message. Please try again.'); // Set failure message
      }
    } catch (error) {
      setStatusMessage('Error sending message: ' + error.message); // Set error message
    }
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
            value={message} // Bind the message state to the textarea
            onChange={(e) => setMessage(e.target.value)} // Update the message state on input change
          ></textarea>
          <button
            className="mt-2 w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-all"
            onClick={handleSendMessage}
          >
            Send
          </button>
          <p className="mt-2 text-sm text-yellow-300">{statusMessage}</p> {/* Display status message */}
        </div>
      )}
    </>
  );
};

export default Bot;
