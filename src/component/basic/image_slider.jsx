import React from "react";
import { useEffect,useRef } from "react";
import "./image_slider.css"
import Box from "./box"
import Women from "../../img/img_sld1.jpg"
import Watch from "../../img/img_sli2.jpg"
import Watch2 from "../../img/img_sld_3.jpg"

const  imgslider=()=>{

    return(<>
        <div className="slider"  >
            <div className="slides" >
                <div className="slide">
                    <Box
                    src={Women}/>                    
                </div>
                <div className="slide" >
                    <Box 
                        src={Watch}
                    />
                </div> 
                
                <div className="slide">
                    <Box 
                        src={Watch2}
                    />
                </div>
                {/* //duplicate */}
                <div className="slide">
                    
                    <Box 
                        src={Women}
                    />
                </div>
                <div className="slide" >
                    <Box 
                        src={Watch}
                    />
                </div> 
                    
                    <div className="slide">
                    <Box 
                        src={Watch2}
                    />
                    </div>
            </div>
        </div>
    
    </>);
}

export default imgslider;