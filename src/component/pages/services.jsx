import React from 'react';
import './services.css';
import Img from "./serviceparaimg.jsx";
import Servicesparabx from "./serviceparabx.jsx";
import Serv1 from "../../img/service_1.png"
import Serv2 from "../../img/service_2.png"


function Services() {
    return (
        <div className="services">
            <h2>Our Services</h2>
            <ul>
                <li>Crop Management</li>
                <div className="one">
                    <Servicesparabx 
                        h1={"Crop Health Check"} 
                        p={"Upload a picture of your crops and let our AI-powered tool analyze their health. Whether it’s soil moisture, disease detection, or nutrient imbalance, our system provides insights to help you manage your crops effectively. Get real-time feedback and improve your yield with smart, data-driven decisions."} 
                    />
                    <Img 
                        url={Serv1} 
                    />
                </div>
                <li>Agro Consultancy</li>
                <div className="one">
                    <Img 
                        url={Serv2} 
                    />
                    <Servicesparabx 
                        h1={"Personalized Agro Consultancy Services"} 
                        p={"Facing challenges with your crop yield? Our agro consultancy services offer customized solutions for farmers looking to optimize their production. From identifying nutrient deficiencies to improving pest management, our experts provide hands-on guidance to help your farm thrive. Book a consultation and see how tailored advice can boost your agricultural success."} 
                    />
                </div>
            </ul>
        </div>
    );
}

export default Services;
