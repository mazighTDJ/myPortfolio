import React, { useState } from "react";
import Icon from "./icon";
import './nav.css'

function Nav() {

    const [elementClass,setElementClass]=useState('element-hidden')

    const showNavBar = (e) => {
        if(elementClass==='element-hidden' ){
            setElementClass('element-show')
        }
        
    }
    const hideNavBar=(e)=>{
        if(elementClass==='element-show' ){
            setElementClass('element-hidden')
        }
    }
    return (
        <nav className="nav-princ" >
            <Icon functionElement={showNavBar} />
            <div id="element" className={elementClass} >
                    <img className="btn-annuler"src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png" onClick={hideNavBar}/>
                    <ul>
                        <li>salut</li>
                        <li>salut</li>
                        <li>salut</li>
                        <li>salut</li>
                        <li>salut</li>
                        <li>salut</li>
                        <li>salut</li>
                        <li>salut</li>
                        <li>salut</li>
                        <li>salut</li>
                        <li>salut</li>
                    </ul>
            </div>

        </nav>
    )
}

export default Nav