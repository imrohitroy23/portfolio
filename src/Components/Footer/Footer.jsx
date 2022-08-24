import React from "react";
import "./Footer.css";
import Wav from "../../img/wavee.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
const Footer = () => {
  return (
    <div className="footer">
      
      <img src={Wav} alt="" style={{ width: "100%" ,  height:"100%"}} />
      <div className="f-content">  
        <div className="f-icons">
        <a href={"https://www.instagram.com/rohit_roy_23/"} target="_blank" rel="noreferrer">
        <Insta color="white" size={"3rem"} />
          </a>
          
          <a href={"https://www.facebook.com/imrohitroy23/"} target="_blank" rel="noreferrer">
          <Facebook color="white" size={"3rem"} />
          </a><a href={"https://github.com/imrohitroy23"} target="_blank" rel="noreferrer">
          <Gitub color="white" size={"3rem"} />
          </a>
          
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
