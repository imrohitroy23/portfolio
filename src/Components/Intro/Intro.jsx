import React, { useContext } from "react";
import "./Intro.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";

import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import boy from "../../img/boy.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
const Intro = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">

          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>Rohit Roy</span>
          <span>
            Full Stack Prefinal Year B.Tech student at VIT, Bhopal
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Contact</button>
        </Link>
             {/* social icons */}
             <div className="i-icons">
        <a href={"https://www.instagram.com/rohit_roy_23/"} target="_blank" rel="noreferrer">
        <Insta color="#74e0e5" size={"5rem"} />
          </a>
          <a href={"https://www.linkedin.com/in/rohit-roy-15a912209/"} target="_blank" rel="noreferrer">
          <Linkedin color="#74e0e5" size={"5rem"} />
          </a><a href={"https://github.com/imrohitroy23"} target="_blank" rel="noreferrer">
          <Gitub color="#74e0e5" size={"5rem"} />
          </a>
          
   
        </div>

       
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={boy} alt="" />
      </div>
    </div>
  );
};

export default Intro;
