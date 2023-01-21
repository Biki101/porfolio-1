import React from "react";
import Button from "../Button/button";

const ContactMe = () => {
  return (
    <div className="text-center mt-44 w-3/4 m-auto">
      <h2 className="my-10 text-2xl">How can you Communicate?</h2>
      <h1 className="text-3xl">Contact Me</h1>
      <div>
        <form className="flex flex-col w-2/3 m-auto rounded-lg p-5">
          <div className="flex gap-2">
            <input
              className="w-1/2 border-2 border-slate-700 rounded-lg p-5"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
            />
            <input
              className="w-1/2 border-2 border-slate-700 rounded-lg p-5"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
          </div>
          <textarea
            className=" border-2 mt-3 border-slate-700 rounded-lg p-5"
            name="message"
            placeholder="Write Something"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button title="Send" round="true" />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
