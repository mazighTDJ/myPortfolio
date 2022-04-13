import React from "react";
import './icon.css'

function Icon({functionElement}){

    return (
        <div className="icon" onClick={functionElement}>
            <div className="ligne1"></div>
            <div className="ligne2"></div>
        </div>
    )
}

export default Icon