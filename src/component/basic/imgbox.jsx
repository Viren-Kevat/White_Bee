import React from "react";
import "./imgbox.css"

const imgbox = ({src,heading,p})=>{
    return(
        <>
              <div className="gallery-item">
                        <img src={src} alt="Feature 1" />
                        <div className="gallery-caption">
                            <h3>{heading}</h3>
                            <p>{p}</p>
                        </div>
                    </div>
        </>
    )
}

export default imgbox;