import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

export default function about() {
    return (
        <Layout>
            <Seo title="Over mij" />

            <main className="main-content">
                    <h1 className="main-title">Over mij</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos deserunt ullam veritatis repudiandae, doloremque voluptatibus quia consectetur fugiat? Molestias impedit quas delectus amet reiciendis consequuntur veniam necessitatibus, dicta recusandae fuga quis eaque quam velit magnam asperiores similique tempore vitae.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos deserunt ullam veritatis repudiandae, doloremque voluptatibus quia consectetur fugiat? Molestias impedit quas delectus amet reiciendis consequuntur veniam necessitatibus, dicta recusandae fuga quis eaque quam velit magnam asperiores similique tempore vitae.
                    </p>
                    <StaticImage 
                        src="../images/blog1.jpg" 
                        alt="Jan Willem de Zeeuw" 
                        placeholder="blurred"/>
            </main>
        </Layout>
    )
}