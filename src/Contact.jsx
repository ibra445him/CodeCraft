
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!message.trim()) {
      setError('Please enter a message');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/contact', { 
        message 
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.status === 200) {
        setSubmitted(true);
        setMessage('');
        setTimeout(() => setSubmitted(false), 5000); // Reset form after 5 seconds
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to send message. Please try again later.');
      console.error('Contact form submission error:', err);
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Send us your message below.</p>
        </div>
        
        {submitted ? (
          <div className="text-center py-8">
            <h2 className="text-2xl text-green-500">Thank you for your message!</h2>
            <p>We'll review it shortly.</p>
          </div>
        ) : (
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      required
                    ></textarea>
                  </div>
                </div>
                
                {error && (
                  <div className="p-2 w-full text-red-500 text-sm">
                    {error}
                  </div>
                )}
                
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Send
                  </button>
                </div>
                
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a href="mailto:example@email.com" className="text-indigo-500">example@email.com</a>
                  <p className="leading-normal my-5">
                    49 Smith St.<br />
                    Saint Cloud, MN 56301
                  </p>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;