import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import Resume from './resume.pdf';


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition


  return (

    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Career</span>
        <span>Objective and Skills</span>
        <span>
        To be an excellent developer and to be a part of an organization<br /> which will provide
 
          me a constant learning on latest technologies<br /> and providconstant career growth
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
      
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
       
          <Card
            emoji={HeartEmoji}
            heading={"Languages"}
            detail={"Java, C/C++, python"}
          />
        {/* second card */}
     
         
          <Card
            emoji={Glasses}
            heading={"DataStructures"}
            detail={"JAVA, C++"}
          />
     
        {/* 3rd */}
       
          <Card
            emoji={Humble}
            heading={"WebSites"}
            detail={
              "React, JavaScript"
            }
          
          />

      </div>
    </div>
  );
};

export default Services;
