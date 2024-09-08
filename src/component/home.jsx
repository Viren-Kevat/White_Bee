import React from 'react';
import Imgbox from './imgbox';
import './home.css';
import { ImageSlider } from '.';
import image1 from '../img/img2.jpg';
import image3 from'../img/img3.jpg';
import image2 from '../img/img4.jpg';
import image4 from '../img/img1.jpg'; // Replace with your image paths

function Home() {
    return (
        <div className="home">
            <header className="home-header">
                {/* <h1>Welcome to White Bee</h1>
                <p>Your smart assistant for better farming.</p> */}
                    <ImageSlider/>
            </header>
            <section className="home-gallery">
                <h2>Explore Our Features</h2>
                <div className="gallery-grid">

                        <Imgbox src ={image1} heading={"Hola!"} p={"This is the place where AI and humans emerges for creating the  revolutionizing era  in agriculture Meet White Bee, the drone that’s here to make your farming life easier and more fun! White Bee is like having a super-smart assistant buzzing by your side.Say goodbye to guesswork and hello to smarter farming with White Bee—because your farm deserves a little magic! ✨"}/>
                        <Imgbox src ={image2} heading={"Image Recognition"} p={"The image illustrates an advanced AI system detecting diseases in plants through image processing. The scene is set in a field with various crops, and a drone equipped with a camera hovers above, capturing detailed images of the plants. The AI system analyzes these images in real-time, identifying signs of disease and highlighting affected areas with digital markers. This technology enables precise and efficient monitoring of plant health, ensuring timely intervention and reducing the need for human labor. The absence of humans in the image emphasizes the autonomous nature of the AI-driven solution."}/>
                        <Imgbox src ={image3} heading={"Plants Healthcare System"} p={"The image showcases a high-tech approach to plant disease detection using AI. A digital tablet displays a magnified view of a vibrant red flower, with various scientific data and diagrams, such as DNA strands and molecular structures, surrounding it. The plant is in a brown pot, and the background suggests a laboratory setting with green foliage. This scene highlights the integration of advanced technology in botany, emphasizing the precision and efficiency of AI in monitoring plant health. The absence of humans underscores the autonomous nature of this innovative solution."}/>
                        <Imgbox src ={image4} heading={"Eqquipiments Alerts!!"} p={"Imagine a smart farm where image processing technology continuously monitors crop health. Cameras installed throughout the field capture real-time images of the plants. These images are analyzed by an AI system to detect signs of disease, nutrient deficiencies, or pest infestations. When an issue is identified, the system sends alerts to various automated equipment, such as irrigation systems, pesticide sprayers, and nutrient dispensers. Each piece of equipment then performs its specific task, ensuring the crops receive the precise care they need. This integration of image processing and automated responses enhances efficiency, reduces manual labor, and promotes healthier crop growth."}/>

                </div>
            </section>
        </div>
    );
}

export default Home;
