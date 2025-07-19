import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const initialUserData = {
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  };

  const [userData, setUserData] = useState(initialUserData);
  const [buttonClicked, setButtonClicked] = useState(false);

  const data = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const send = async (e) => {
    e.preventDefault();
    const { Name, Email, Subject, Message } = userData;
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name, Email, Subject, Message }),
    };

    const res = await fetch(
      "https://foodzing-fb25d-default-rtdb.firebaseio.com/Messages.json",
      option
    );

    if (res.ok) {
      setButtonClicked(true);
      setUserData(initialUserData);

      setTimeout(() => {
        setButtonClicked(false);
      }, 3000);
    }
  };

  return (
    <div className='container'>
      <hr />
      <div className='contact_box' id='contactus'>
        <h1 className='contact_heading'>Contact Us</h1>
        <form>
          <input
            type='text'
            name='Name'
            value={userData.Name}
            placeholder='Enter Your Full Name'
            autoComplete='off'
            onChange={data}
          />
          <input
            type='email'
            name='Email'
            value={userData.Email}
            autoComplete='off'
            onChange={data}
            placeholder='Enter Your Email Address'
          />
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
            cols='30'
            rows='10'></textarea>
          <button className={buttonClicked ? "sent" : ""} onClick={send}>
            {buttonClicked ? "Message Sent" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
