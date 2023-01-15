import React from 'react';
import FeatureBox from './FeatureBox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';

function Feature() {
  return (
    <div id='features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
          <FeatureBox image={fimage1} title="Quality Airbags/Air springs" />
          <FeatureBox image={fimage2} title="Quality Compressors" />
          <FeatureBox image={fimage3} title="Remote Control" />
         
        </div>
    </div>
  )
}

export default Feature;