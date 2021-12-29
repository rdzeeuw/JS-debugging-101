import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

export default function nieuwsPost({data}) {
    const post = data.markdownRemark

    return (
        <Layout>
            <div className="nieuws-item">
                <h1 className="main-title"> title
                    {/* {post.frontmatter.title} */}
                    </h1>
                {/* <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4> */}
                <div className="nieuws-item-foto">
                    {/* <Img fluid={} /> */}
                </div>

                {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
                <Link to='../pages/nieuws'>Naar Nieuwsoverzicht</Link>
            </div>
        </Layout>
    )
}

// export const postQuery = graphql`
//     query BlogPostByPath($path: String!) {
//         markdownRemark(frontmatter: { path: { eq: $path } }){
//             html
//             frontmatter {
//                 slug
//                 title
//                 author
//                 date
//                 img {
//                     childImageSharp {
//                       fluid {
//                         ...GatsbyImageSharpFluid
//                       }
//                     }
//                 }
//             }
//         }
//     }
// `