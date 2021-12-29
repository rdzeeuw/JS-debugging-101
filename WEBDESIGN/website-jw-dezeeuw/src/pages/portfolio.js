import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function portfolio() {

    return (
        <Layout>
            <Seo title="Portfolio" />

            <main className="main-content">
                <h1 className="main-title">Portfolio</h1>
                <p className="main-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, totam blanditiis ipsum neque molestias consequuntur quos. Facere repellendus, provident facilis assumenda voluptate, vero fuga dolores pariatur sequi repudiandae fugit minima.
                </p>
                <div className="card-container">
                    <div className="card">
                        <StaticImage 
                            src="../images/nieuws-fotos/hdr.jpg"
                            alt="documentaries" 
                            />
                        <h5 className="card__title">Documentaires</h5>
                        <p className="card_description">Hier vind je mijn fotoreportages en documentaires, gesorteerd op onderwerp.</p>
                        <hr></hr>
                        <Link to="../documentaires" className="card__link">Lees meer </Link>
                    </div>

                    <div className="card">
                        <StaticImage 
                            src="../images/blog2.jpg"
                            alt="portrets" 
                            />
                        <h5 className="card__title">Portretten</h5>
                        <p className="card_description">Portretten van allerlei verschillende mensen vanover de hele wereld</p>
                        <hr></hr>
                        <Link to="../portretten" className="card__link">Lees meer </Link>
                    </div>

                    <div className="card">
                        <StaticImage 
                            src="../images/architectuur.jpg"
                            alt="architecture" />
                        <h5 className="card__title">Landschap & architectuur</h5>
                        <p className="card_description">Een serie over de stad en de natuur, over steen en bomen...</p>
                        <hr></hr>
                        <Link to="../landschappen" className="card__link">Lees meer </Link>
                    </div>

                    <div className="card">
                        <StaticImage 
                            src="../images/blog1.jpg"
                            alt="still life" />
                        <h5 className="card__title">Stillevens</h5>
                        <p className="card_description">Materialistische verstilling van een ongekende schoonheid</p>
                        <hr></hr>
                        <Link to="../stillevens" className="card__link">Lees meer </Link>
                    </div>
                   
                </div>
                
            </main>
        </Layout>
    )
}
