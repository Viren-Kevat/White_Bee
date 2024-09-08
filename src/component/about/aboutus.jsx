import React from "react";
import "./aboutus.css";
import Member from "./member"; 
import Daksh from "../../img/profile.jpg";
import Chopper from "../../img/profilel.jpg"
import Vinit from "../../img/profilev.jpg"


const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="textcontainerabut">
            <h2>About Us</h2>
            <p>Our mission is to support sustainable agriculture practices through innovative solutions.</p>
       
        </div>
        
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
        We are committed to driving the future of farming through continuous innovation and advanced technologies that empower farmers to optimize their productivity and resources.        </p>
      </div>

      <div className="about-section">
        <h2>Our Values</h2>
        <p>
        Dedicated to making the world a better place through innovative technology.        </p>
      </div>

      <div className="about-section">
            <h2>Meet the Team</h2>
            <div className="team">
                    <Member h3={"Daksh Umakant Chaudhari"} p={"Lead Developer"} src={Daksh} />
                    <Member h3={"Ridhdhi Ghanshyambhai Jogani"} p={"Chief Marketing Officer"} src={Chopper}/>
                    <Member h3={"Savan Kirtibhai Kansagara"} p={"Developer"} src={Vinit} />        
            </div>
       </div> 
    </div>
          
   
  );
};

export default AboutUs;
