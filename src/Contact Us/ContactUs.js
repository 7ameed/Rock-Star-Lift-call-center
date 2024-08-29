import React from 'react'
import emailjs from '@emailjs/browser';

function ContactUs() {
    const sendEmail = (e) =>{
        e.preventDefault();
        alert("Submitted");
        emailjs.sendForm('service_vc4bbtx', 'template_ryj2ja9', e.target, '9SDnD32dIvoJNQV_h')
    }
  return (
    <div>
        <div className='formcontainer'>
            <form onSubmit={sendEmail}>
                <h1>Contact Us</h1>
                <input type='text' id='firstname' placeholder='First Name' required></input>
                <input type='text' id='lastname' placeholder='Last Name' required></input>
                <input type='email' name='email_form' id='email' placeholder='Email' required></input>
                <input type='text' id='mobile' placeholder='Mobile' required></input>
                <label htmlFor='message'> Your Message Here... </label>
                <textarea name='message' id='message'  required></textarea>
                <input  type='submit' value='send' id='button'></input>
            </form>
        </div>
    </div>
  )
}

export default ContactUs