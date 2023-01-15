import { Instagram, LocationCity, Mail, Map, Phone, PinDrop } from '@mui/icons-material'
import React from 'react'
import aboutimage from '../images/about.jpg'


function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt=''/>
        </div>
        <div className='about-text'>
            <h1>CONNECT WITH US</h1>
            <div className='company-details'>
              <p className='icon-s'><Mail/> kwelesechele@gmail.com</p>
              <p className='icon-s'><Phone/> 081 404 0621</p>
              <a href='https://www.instagram.com/sechel.air/'><p className='icon-s'><Instagram/> sechel.air</p></a>
              <p className='icon-s'><PinDrop/> Johannesburg, South Africa</p>
            </div>
           
        </div>

    </div>
  )
}

export default About