import React, { useEffect } from "react";
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';
import Bottom from "./Components/Bottom";
import {Helmet} from 'react-helmet';
import ReactGA from 'react-ga'; 

const TRACKING_ID = "UA-254529854-2"; //Google analytics tracking ID
ReactGA.initialize(TRACKING_ID);

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="App">     
        <Helmet>
          <title>SechelAir Air Suspension Kits</title>
          <meta name="description" content="the best air suspension in South Africa"/>
          <meta name="keywords" content="Air Suspension, best air suspension, air bags, affordable air suspension in South Africa" />
        </Helmet>
      <Navbar/>
      <Header/>
      <Feature/>
      <Offer/>
      <About/>
      <Contact/>
      <Bottom/>
    </div>
  );
}

export default App;
