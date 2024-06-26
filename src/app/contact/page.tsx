"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mvoekavb");

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center mt-10">
        <p className="text-[#02020200] font-popins font-bold text-4xl">
          Your Query has been submitted.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#CAE4FF] via-green-100 to-blue-100">
      <div>
        <Navbar />
      </div>
      <h1 className="flex justify-center content-center text-[#030303] font-semibold md:text-5xl text-3xl md:h-36 h-28 text-center pt-12  ">
        {" "}
        Contact us
      </h1>
      <div className="pt-10">
        <div className="flex items-center justify-center"></div>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto  md:px-0 px-4  "
          action="https://formspree.io/f/mvoekavb"
          method="POST"
        >
          <div className="mb-6">
            <label
              htmlFor="Name"
              className="block text-gray-700 font-bold mb-2"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="shadow appearance-none border  w-full py-2 px-3 text-black leading-tight 
focus:outline-none focus:shadow-outline rounded-md"
              placeholder="Enter your name"
            />
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-email"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className=" rounded-md shadow appearance-none border  w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your email address"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm italic"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className=" rounded-md shadow appearance-none border  w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              placeholder="Your message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm italic"
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="flex items-center justify-center md:font-semibold font-normal text-gray-100 
            bg-gradient-to-r from-gray-500 via-green-700 to-cyan-600 md:w-40 w-32 md:px-2 px-1 py-1 
            rounded-md hover:from-gray-300 hover:via-green-400 hover:to-cyan-500 hover:text-black 
           transition-all duration-300 mb-12"
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
