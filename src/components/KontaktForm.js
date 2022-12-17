// Michelle
// email form component. 
import React, { useRef } from "react";
import "../styles/kontaktform.css";
import emailjs from "@emailjs/browser";


// ved at bruge et hook (useRef) målretter du imod DOM element
const Contact = () => {
  const form = useRef();

  // Forhindre at siden reloader
  const sendEmail = (e) => {
    e.preventDefault();


    // id fra emailjs
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
      
      {/* Brugerens navn */}
      <input
        type="text"
        name="user_name"
        placeholder="Navn"
        className="form_navn"
      />
      
      {/* Hvor brugeren skal taste sin email ind */}
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        className="form_email"
      />
       {/* tekst containeren */}
      <textarea name="message" placeholder="Message" className="form_message" />
      
      <input type="submit" value="Send" className="send" />
    </form>
  );
};

export default Contact;
