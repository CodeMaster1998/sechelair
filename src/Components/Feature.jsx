import React from 'react';
import FeatureBox from './FeatureBox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import { Helmet } from 'react-helmet';

function Feature() {
  return (
    <div id='features'>
      <Helmet>
          <title>SechelAir Air Suspension Features</title>
          <meta name="description" content="Double and Triple Bellow Bags, 444c Air compressor, 5 Gallon Steel Tank, Water Trap, Pressure Switch, iSystem Tebao Management, VU4 Blocks, Wiring + Fuse"/>
        </Helmet>
        <h1>FEATURES.</h1>
        <div className='a-container'>
          <FeatureBox image={fimage1} title="Quality Airbags/Air springs" />
          <FeatureBox image={fimage2} title="Quality Compressors" />
          <FeatureBox image={fimage3} title="Remote Control" />
         
        </div>
    </div>
  )
}

export default Feature;