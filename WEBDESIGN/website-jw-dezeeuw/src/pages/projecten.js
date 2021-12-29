import React from 'react'
import Project from '../components/Project'
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Projecten() {
    return (
        <Layout>
            <Seo title="Projecten" />

            <main className="main-content">
                <h1 className="main-title">Projecten</h1>
                <p className="main-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, totam blanditiis ipsum neque molestias consequuntur quos. Facere repellendus, provident facilis assumenda voluptate, vero fuga dolores pariatur sequi repudiandae fugit minima.
                </p>
                <div className="card-container">
                    <Project 
                        title="Project 1: Als huizen konden praten"
                        imgUrl="../images/boom-alone.jpg"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, totam blanditiis ipsum neque molestias consequuntur quos. Facere repellendus, provident facilis assumenda voluptate, vero fuga dolores pariatur sequi repudiandae fugit minima."
                        />
                        <Project 
                        title="Project 2 Scootmobielers"
                        imgUrl="../images/blog1.jpg"
                        description="Portretten van allerlei verschillende mensen vanover de hele wereld"
                        />
                    <Project 
                        title="Project 3 Gas & Oil by Night"
                        imgUrl="../images/architectuur.jpg"
                        description="Een serie over de stad en de natuur, over steen en bomen..."
                        />
                    <Project 
                        title="Project 4 Utrecht"
                        imgUrl="../images/blog2.jpg"
                        description="Materialistische verstilling van een ongekende schoonheid"
                        />
                </div>
            </main>
        </Layout>
    )
}
