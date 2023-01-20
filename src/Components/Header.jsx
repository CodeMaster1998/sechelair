import React from 'react';
import {Link} from 'react-scroll';



function Header() {

  
  return (
    <div id='main'>
      
        <div className='name'>
        
            <h2>DO YOU NEED</h2>
            <h1><span>AIR</span> SUSPENSION?</h1>
            <p className='details'>Qaulity And Affordable Air Suspension Kits For Your Vehicle</p>
            <div className='header-btns'>
                <button className='pr-btn'><Link to='contact' smooth={true} duration={1000}>ENQUIRE NOW!</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Header