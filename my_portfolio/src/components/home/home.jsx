import React from "react";

import './home.css'

const Home = () => {
    return (
        <div className="container-section">

            <section className="section-1">

                <div className="div-blue">

                    <h4 className="font-title name-title">Mazigh</h4>

                    <div className="title-description">
                        <h2 className="font-title competence-title">Developpeur <br /> Full-Stack.</h2>
                        <div className="mini-description">
                            <p>Solides compétences <br/>en développment Web Full-Stack </p>
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

                <div className="div-yellow">

                </div>
            </section>

            <section>

            </section>

        </div>
    )
}

export default Home;