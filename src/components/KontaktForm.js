// Michelle 
import React, { UseRef } from 'react'
import '../styles/kontaktform.css';
import emailjs from '@emailjs/browser'; 

  const Contact = () => {

  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
        'service_li2rdfo',
         'template_9cryvft',
          form.current,
        'A6VWAVX495uVFtwA0'
        )

      .then((result) => {
          console.log(result.text);
      },
        (error) => {
          console.log(error.text);
      });
  };

    return <>
      <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
               <input type="text" name="user_name" />
                <label>Email</label>
                 <input type="email" name="user_email" />
               <label>Message</label>
             <textarea name="message" />
           <input type="submit" value="Send" />
        </form>

    </>
     }; 

     export default Contact; 