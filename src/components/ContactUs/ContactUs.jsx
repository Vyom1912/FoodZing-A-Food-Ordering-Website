import React, { useState } from "react";
import "./ContactUs.css";
import { app } from "../Firebase/firebaseConfig";

const initialUserData = {
  Name: "",
  Email: "",
  Subject: "",
  Message: "",
};

const buttonText = {
  idle: "Send Message",
  sending: "Sending...",
  sent: "Message Sent",
  error: "Could not send, try again",
};

const ContactUs = () => {
  const [userData, setUserData] = useState(initialUserData);
  const [status, setStatus] = useState("idle");

  const data = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const send = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${app.options.databaseURL}/Messages.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      setStatus("sent");
      setUserData(initialUserData);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div className='contact-container'>
      <hr />
      <div className='contact_box' id='contactus'>
        <h1 className='contact_heading'>Contact Us</h1>
        <form onSubmit={send}>
          <div className='contact-row'>
            <input
              type='text'
              name='Name'
              value={userData.Name}
              placeholder='Enter Your Full Name'
              autoComplete='off'
              onChange={data}
              required
            />
            <input
              type='email'
              name='Email'
              value={userData.Email}
              autoComplete='off'
              onChange={data}
              placeholder='Enter Your Email Address'
              required
            />
          </div>
          <input
            type='text'
            name='Subject'
            autoComplete='off'
            onChange={data}
            value={userData.Subject}
            placeholder='Subject of Message'
          />
          <textarea
            name='Message'
            placeholder='Your Message'
            value={userData.Message}
            onChange={data}
            autoComplete='off'
            rows='8'
            required></textarea>
          <button
            type='submit'
            className={status}
            disabled={status === "sending"}>
            {buttonText[status]}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
