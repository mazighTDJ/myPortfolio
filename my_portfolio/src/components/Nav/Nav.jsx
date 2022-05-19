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
                    
                    <ul className="nav-group">

                        <li className="nav-item">My Work</li>
                        <li className="nav-item">My Shelf</li>
                        <li className="nav-item">My Résumé</li>
                        <h2>Say Hello</h2>
                        <li className="nav-item-inactif">tadjinemazigh2019@gmail.com</li>
                        <li className="nav-item-icon">
                            <img src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png " alt="icon linkedin"/>
                            <img src="https://img.icons8.com/ios-glyphs/48/000000/github.png" alt="icon github "/>
                        </li>
                        
                    </ul>
                    <div>
                        <img className="btn-annuler"src="https://img.icons8.com/ios-glyphs/35/000000/delete-sign.png" alt="btn annuler" onClick={hideNavBar}/>
                    </div>
                    
            </div>

        </nav>
    )
}

export default Nav