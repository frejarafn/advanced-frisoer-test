// Michelle
import React, { useRef } from "react";
import "../styles/kontaktform.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_li2rdfo",
        "template_9cryvft",
        form.current,
        "A6VWAVX495uVFtwA0"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form_container">
      <input
        type="text"
        name="user_name"
        placeholder="Navn"
        className="form_navn"
      />

      <input
        type="email"
        name="user_email"
        placeholder="Email"
        className="form_email"
      />

      <textarea name="message" placeholder="Message" className="form_message" />
      <input type="submit" value="Send" className="send" />
    </form>
  );
};

export default Contact;
