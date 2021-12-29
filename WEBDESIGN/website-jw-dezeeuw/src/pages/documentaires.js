import React from 'react'
import Layout from "../components/layout"
// import SimpleImageSlider from "react-simple-image-slider";
// import { GatsbyImage } from 'gatsby-plugin-image'


export default function documentaires({data}) {
    console.log(data)

   


    // const images = [
    //     { url: "../images/blog1.jpg" },
    //     { url: "../images/blog2.jpg" },
    //     { url: "../images/blog1.jpg" },
    //     { url: "../images/blog2.jpg" },
    //     { url: "../images/blog1.jpg" },
    //     { url: "../images/blog2.jpg" },
    //   ];

    return (
        <Layout>
        
            <main className="main-content">
                <h1 className="main-title">Documentaires</h1>
                <p className="main-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, totam blanditiis ipsum neque molestias consequuntur quos. Facere repellendus, provident facilis assumenda voluptate, vero fuga dolores pariatur sequi repudiandae fugit minima.
                </p>
                <div className="card-container">
                    <h3 className="portfolio-title">Stillevens</h3>
                    {/* <div>
                        <SimpleImageSlider
                            width={896}
                            height={504}
                            images={images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div> */}

                    {/* <div className="card">
                        <StaticImage 
                            src="../images/nieuws-fotos/hdr.jpg"
                            alt="documentaries" 
                            />
                        <h5 className="card__title">Documentaires</h5>
                        <p className="card_description">Hier vind je mijn fotoreportages en documentaires, gesorteerd op onderwerp.</p>
                        <hr></hr>
                        <Link to="#" className="card__link">Lees meer </Link>
                    </div> */}

                   
                </div>
                
            </main>
        </Layout>
    )
}



