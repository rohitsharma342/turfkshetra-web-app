import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8  w-full">
        {/* Header */}
        <h2 className="text-3xl font-bold text-blue-600 mb-6">CONTACT US</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Let’s Know Your Issue</h3>
            <p className="text-gray-600 mb-6">
              Find our contact details and get in touch with our team for any assistance or inquiries.
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold">PHONE</h4>
              <p className="text-gray-700 flex items-center gap-2">
                📞 +919341281889
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold">EMAIL</h4>
              <p className="text-gray-700">✉️ xraysolutions360@gmail.com</p>
              <p className="text-gray-700">✉️ xraysolutions360@rediff.com</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold">EMAIL ADMIN</h4>
              <p className="text-gray-700">✉️ admin@xraysolutions360.in</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="p-3 border rounded w-full focus:ring focus:ring-blue-200"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border rounded w-full focus:ring focus:ring-blue-200"
                />
              </div>

              <input
                type="email"
                placeholder="Email *"
                className="p-3 border rounded w-full focus:ring focus:ring-blue-200"
              />

              <textarea
                placeholder="Message *"
                rows="4"
                className="p-3 border rounded w-full focus:ring focus:ring-blue-200"
              ></textarea>

              <button className="w-full bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold py-3 rounded shadow-lg hover:opacity-90 transition">
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/919341281889"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white flex items-center gap-2 px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <span>Whatsapp Chat</span>
        <span className="text-2xl">💬</span>
      </a>
    </div>
  );
};

export default ContactForm;
