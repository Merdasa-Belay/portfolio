import React from 'react';
const Contact = () => {
  // We'll only keep 'submitted' to show the success message after submit (optional)

  // No need for handleChange or formData state now

  // Optional: you can detect query param on load and show success message
  // but to keep it simple we'll just remove 'submitted' logic here

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          <span className="relative inline-block">
            Get In Touch
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform translate-y-2"></span>
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-700 mb-8">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out through any of the channels below or use the contact form.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-map-marker-alt text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600">Ethiopia, Addis Ababa</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-envelope text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">merdasabelay@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-phone-alt text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">+2519 1302 4687</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/Merdasa-Belay" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition duration-300">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/merdasa-belay-795a03128/" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://x.com/MerdasaBelay" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
         
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2">
            <form
              action="https://formsubmit.co/merdasabelay@gmail.com"  // <-- your email here
              method="POST"
              className="bg-gray-50 p-8 rounded-lg shadow-md"
              // optional: you can add `target="_blank"` if you want to open thank you page in new tab
            >
              
              {/* Honeypot field for spam bots */}
              <input type="text" name="_honey" style={{ display: 'none' }} />

              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300"
              >
                Send Message
              </button>
            </form>

         
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
