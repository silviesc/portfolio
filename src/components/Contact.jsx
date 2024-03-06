import React, { useState } from "react";
import "../scss/contact.scss";
import send from "../images/send.png";

function Contact() {

    const [formData, setFormData] = useState({email: '', message: ''});

  return (
    <div className="contact">
    <h2 className="contact__title">Say hello</h2>
      <form className="contact__form">
        <input type="email" name="email" id="email" placeholder="Your email" className="contact__form--input"/>
        <input type="text" name="msg" id="msg" placeholder="Your message" className="contact__form--input"/>
        <button type="submit" className="contact__form--btn">
            <img src={send} alt="send arrow" className="contact__form--send"/>
            <p>Send message</p>
        </button>
      </form>
      <footer className="contact__footer">© 2024 Silvia Escanciano.</footer>
    </div>
  );
}

export default Contact;
