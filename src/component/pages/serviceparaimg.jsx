import React from "react";
import "./serviceparaimg.css"

const img =({url})=>{
    return(
        <>
            <div className="box">
                <img src={url} alt="" height={200} width={400} />
            </div>
        </>
    )
}

export default img;