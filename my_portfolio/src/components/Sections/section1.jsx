import React from "react";
import imagep from './image.svg'
import Nav from "../Nav/Nav";
import './section1.css'

function Section1(){


    return (
        <section className="section-1">
                <Nav />
                <div className="div-blue">

                    <h4 className="font-title name-title">Mazigh</h4>

                    <div className="body-section">

                        <div className="mini-description">
                            <div>
                                <h2 className="font-title competence-title">Developpeur <br /> Full-Stack.</h2>
                                <div className="mini-description">
                                    <p>Solides compétences <br />en développment Web Full-Stack </p>
                                </div>
                            </div>
                        </div>

                        <div className="large-description">
                            <div>
                                <p>
                                    J'ai crée plusieurs systemes de gestion, personnel et pour des clients comme ma propre école de formation
                                </p>
                            </div>
                            <div>
                                <p>
                                    Déja crée des interfaces utilisateurs conviviale et sympa. Mais aussi le Back-End est implémenter de facon trés concice.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="div-yellow">
                  <img src={imagep}  alt="Image personnel" className="img-pers" />
                </div>
            </section>

    )
}

export default Section1