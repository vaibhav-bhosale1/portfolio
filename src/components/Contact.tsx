"use client";
import React from "react";
import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

const Contact = () => {
  return (
    <div className="relative  ">
      {/* Background Video */}
     

      {/* Content Section */}
      <div className="relative z-10">
        <h1 className="text-center text-4xl md:text-6xl font-bold mb-10 text-white">
          Contact <span className="text-orange-400">Me</span>
        </h1>
        <div
          className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded space-y-8 lg:space-y-0 lg:space-x-8"
          id="contact"
        >
          {/* Contact Details */}
          <div className="flex justify-center items-center">
  <ul className="space-y-6 w-full max-w-xs md:max-w-md">
    {/* Phone */}
    <li className="flex items-center gap-4 p-3 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 shadow-md hover:shadow-lg w-full">
      <Image
        src={phone}
        className="h-[40px] w-auto md:h-[50px] transition-transform duration-300 hover:scale-105"
        alt="phone"
      />
      <a href="tel:8830790274" className="text-sm md:text-lg text-white hover:text-indigo-400 transition-colors duration-300">
        <p className="font-semibold tracking-wide break-words">+91 88307 90274</p>
      </a>
    </li>

    {/* Email */}
    <li className="flex items-center gap-4 p-3 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 shadow-md hover:shadow-lg w-full flex-wrap">
      <Image
        src={mail}
        className="h-[40px] w-auto md:h-[50px] transition-transform duration-300 hover:scale-105"
        alt="mail"
      />
      <a href="mailto:textmevaibhav@gmail.com" className="text-sm md:text-lg text-white hover:text-indigo-400 transition-colors duration-300 break-words">
        <p className="font-semibold tracking-wide break-words w-full">textmevaibhav@gmail.com</p>
      </a>
    </li>
  </ul>
</div>

          {/* Contact Form */}
          <div className="bg-white/10 p-6 rounded-xl max-w-[550px]">
            <h2 className="text-5xl font-bold text-orange-400 mb-4">
              Let's connect
            </h2>
            <p className="text-white/70 mb-6">
              Send me a message and let's schedule a call!
            </p>
            <form
              action="https://formbold.com/s/9Bm0O"
              method="POST"
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Last Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Email"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Phone"
                  required
                />
              </div>
              <textarea
                name="message"
                className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your message"
               
                required
              />
              <button
                className="bg-orange-700 hover:bg-orange-400 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
