import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './Footer.scss'
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";



const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_51mm88u",
        "template_vt6bfhl",
        form.current,
        "CYiH7hLIP8S9AmZPh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {!isFormSubmitted ? (
        <form ref={form} onSubmit={sendEmail}>
          <h2 className="head-text">Chat with me</h2>
          <div className="app__footer-cards">
            <div className="app__footer-card">
              <img src={images.mobile} alt="phone" />
              <a href="tel: +447768573302" className="p-text">
                +447768573302
              </a>
              <img src={images.email} alt="email" />
              <a href="mailto: zaghloulegy@gmail.com" className="p-text">
                zaghloulegy@gmail.com
              </a>
            </div>
          </div>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
          />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Send" className="message" />
          <div className="copyright">
            <p className="p-text">@2022 Mohamed Zaghloul</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  )};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
