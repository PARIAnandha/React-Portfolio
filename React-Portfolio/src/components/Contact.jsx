import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' }); // Track errors for each field
  const contact_info = [
    { logo: 'mail', text: 'parianandha@gmail.com' },
    { logo: 'logo-whatsapp', text: '7548825840' },
    { logo: 'location', text: 'Coimbatore' }
  ];

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error when user starts typing
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    let newErrors = { name: '', email: '', message: '' };

    // Name validation: only alphabetic characters (no numbers)
    const nameRegex = /^[A-Za-z ]+$/; // Allows spaces and alphabetic characters only
    if (!nameRegex.test(formData.name)) {
      newErrors.name = 'Please enter a valid name with only alphabetic characters.';
      isValid = false;
    }

    // Email validation: must contain "@" and "."
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    // Message validation: check if message is provided
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
      isValid = false;
    }

    // If any validation fails, set the errors and stop the form submission
    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // Proceed with sending the message if validation passes
    setStatus('Sending message...');
    try {
      const response = await fetch('https://sheetdb.io/api/v1/9si3cqgxmpv77', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData) // Send the formData directly
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
      } else {
        setStatus('Failed to send the message.');
      }
    } catch (error) {
      setStatus('Error occurred while sending the message.');
    }

    // Reset the status and form data after 2 seconds
    setTimeout(() => {
      setStatus('');
    }, 2000);

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              pattern="[A-Za-z ]+" // Only alphabetic characters and spaces
              title="Only alphabetic characters and spaces are allowed."
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>} {/* Show name error message */}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>} {/* Show email error message */}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={10}
              required
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>} {/* Show message error message */}

            <button type="submit" className="btn-primary w-fit">
              Send Message
            </button>

            {/* Display status message below the message input */}
            {status && (
              <p className={`mt-4 ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                {status}
              </p>
            )}
          </form>

          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div key={i} className="flex flex-row text-left gap-4 flex-wrap items-center">
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm break-words">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
