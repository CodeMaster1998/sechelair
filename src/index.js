import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CookieConsent from "react-cookie-consent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CookieConsent
      location="bottom"
      buttonText="Allow"
      declineButtonText="Decline"
      declineButtonStyle={{
        padding: "12px 32px",
        borderRadius: "4px",
        backgroundColor: "#d5d7da",
        outline: "none",
        border: "none",
        color: "#FF0000",
        fontSize: "14px",
        fontWeight: "500"
      }}
      cookieName="myAwesomeCookieName2"
      style={{ background: "#2B373B" }}
      buttonStyle={{
        padding: "12px 32px",
        borderRadius: "4px",
        backgroundColor: "#d5d7da",
        outline: "none",
        border: "none", 
        color: "#7c828d", 
        fontSize: "14px",
        fontWeight: "500"
       }}
      expires={150}
      enableDeclineButton>
      

      This website uses cookies to enhance the user experience.
      
    </CookieConsent>
    <App/>
  </>
);
                                                                                                                                                           