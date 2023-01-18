import React, {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
//import fireDb from '../firebase';

function Contact() {

  const [state, setState] = useState({

    fullname: "",
    email: "",
    message: ""
  });

  const {fullname, email, message} = state;

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]:value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!fullname || !email || !message) {
      toast.error("Message not sent!");
    }else{
      //fireDb.child("clients").push(state);
      setState({fullname: "", email: "", message: ""});
      toast.success("Form submitted successfully");
    }
  };

  return (
    <div id='contact'>
      <Helmet>
          <title>Get a quote for your vehicles air suspension</title>
          <meta name="description" content="Send us a message to get a quote on your air suspension, afoordable quality, only with SechelAir"/>
        </Helmet>
        <h1>GET A QUOTE</h1>
        <ToastContainer/>
        <form className='form1' onSubmit={handleSubmit}>
            <input type='text' name='fullname' placeholder='Full Name' value={fullname} onChange={handleInputChange} required/>
            <input type='text' name='email' placeholder='Enter Your E-Mail' value={email} onChange={handleInputChange} required/>
            <textarea  placeholder='Write Here....' name='message' value={message} onChange={handleInputChange} required></textarea>
            <input type='submit' value='Send' className='btn-send'/>
        </form>
    </div>
  )
}

export default Contact;

