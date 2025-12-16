import React from "react";

function ContactForm() {
  return (
    <div className="mt-20 w-full flex justify-center px-4 sm:px-0">
      <div
        className="
          contact 
          max-w-[80%] 
          flex 
          flex-col 
          sm:flex-col 
          lg:flex-row 
          justify-between 
          items-center 
          mx-auto 
          gap-6
        "
      >
        {/* Form Section */}
        <div
          className="
            bg-[#F8F8F8]
            w-full
            sm:w-full
            lg:w-[500px]
            h-auto
            lg:h-[600px]
          "
        >
          <div className="px-5 sm:px-10 pt-10">
            <h4 className="text-xl sm:text-2xl pl-1">CONTACT</h4>
            <h1 className="text-3xl sm:text-5xl mt-2">
              Get In Touch
            </h1>

            <div className="mt-10">
              <div>
                <label>NAME</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-b border-gray-400 px-1 py-2 focus:outline-none"
                />
              </div>

              <div className="mt-4">
                <label>EMAIL</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full border-b border-gray-400 px-1 py-2 focus:outline-none"
                />
              </div>

              <div className="mt-4">
                <label>MESSAGE</label>
                <input
                  type="text"
                  placeholder="Enter your message"
                  className="w-full border-b border-gray-400 px-1 py-2 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-5 bg-[#E9E1D9] text-gray-800 py-2 px-3 rounded-md font-semibold"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-auto">
  <img
    src="/contactForm/WhatsApp Image 2025-11-29 at 21.34.55_a8d5cc8b.jpg"
    alt="Contact"
    className="
      w-full
      h-auto
      sm:h-auto
      lg:h-[600px]
      object-contain
      lg:object-cover
    "
  />
</div>
      </div>
    </div>
  );
}

export default ContactForm;
