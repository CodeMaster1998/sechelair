import React, {useState, useRef} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';



function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rqra8u5', 'template_0r8znok', e.target, 'kHvHk4gbrTO0KOHIF')
      .then((result) => {
          toast.success('Message Sent!')
          console.log(result.text);
          console.log('message sent')
      }, (error) => {
          console.log(error.text);
          toast.error('Message not sent! Try Again')
      });
  };

  const [state, setState] = useState({

    fullname: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]:value});
  };

  

  return (
    <div id='contact'>
      
        <h1>GET A QUOTE</h1>
        <ToastContainer/>
        <form className='form1' useRef={form} onSubmit={sendEmail}>
            <input type='text' name='fullname' placeholder='Full Name'  onChange={handleInputChange} required/>
            <input type='text' name='email' placeholder='Enter Your E-Mail'  onChange={handleInputChange} required/>
            <textarea  placeholder='Write Here....' name='message'  onChange={handleInputChange} required></textarea>
            <input type='submit' value='Send' className='btn-send'/>
        </form>
    </div>
  )
}

export default Contact;

