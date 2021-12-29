import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const nieuws = ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <Seo title="Nieuws" />
            <main className="main-content">
                <h1 className="main-title">Nieuws</h1>
                {data.allMarkdownRemark.edges.map(post => (
                    <div key={ post.node.id } className="nieuws-item">
                        <h3>{post.node.frontmatter.title}</h3>
                        <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                        <Img fluid={post.node.frontmatter.img.childImageSharp.fluid} className="nieuws-foto"/>
                        <Link to={post.node.frontmatter.slug} className="nieuws-link">Lees verder</Link>
                    </div>
                ))} 
            </main>
        </Layout>
        
    )
}

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                  frontmatter {
                    title
                    date
                    slug
                    author
                    img {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
`

export default nieuws