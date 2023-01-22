import React, { useState } from "react";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventdefault();
    setName("");
    setMessage("");
    setEmail("");
    console.log("form submitted");
  };
  return (
    <div id="contact" className="text-center mt-44 w-3/4 m-auto">
      <h2 className="my-10 text-2xl">How can you Communicate?</h2>
      <h1 className="text-3xl text-yellow-800">Contact Me</h1>
      <div>
        <form
          className="flex flex-col w-2/3 m-auto mt-10 rounded-lg p-5"
          onSubmit={handleSubmit}
          action="recievemessage.php"
        >
          <div className="flex gap-2">
            <input
              className="w-1/2 border-2 border-slate-700 rounded-lg p-5"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              value={name}
              onChange={onChangeName}
            />
            <input
              className="w-1/2 border-2 border-slate-700 rounded-lg p-5"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <textarea
            required
            className=" border-2 mt-3 border-slate-700 rounded-lg p-5"
            name="message"
            placeholder="Write Something"
            id="message"
            cols="30"
            rows="10"
            value={message}
            onChange={onChangeMessage}
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="bg-red-800 cursor-pointer text-white px-4 py-3 w-40 text-center rounded-full hover:bg-black mt-10 self-end"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
