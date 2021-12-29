import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import Hero from '../components/Hero'
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import { FaArrowAltCircleRight as Arrow } from "react-icons/fa";
import { Container, Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = ({data}) => (
   
  <Layout>
    <Seo title="Home" />
      <Container fluid="xxl" className="banner p-0 pt-5">
        <Carousel fade>
          {data.bannerPhotos.edges.map(image => {
              return (
                <Carousel.Item key={image.node.id} interval={5000} >
                  <Img 
                    fluid={image.node.childImageSharp.fluid}
                    alt={image.node.base.split('-').join(' ').split('.')[0]}
                  />
                  <Carousel.Caption>
                    <p>{image.node.base.split('-').join(' ').split('.')[0]}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
        </Carousel>
        <div className="logo">
          <h1>Jan Willem<br /> de Zeeuw</h1>
          <h3>Fotografie</h3>
          {/* <Link 
            className="goto-banner" 
            to="/portfolio/">Naar portfolio <Arrow className="arrow"/>
          </Link> */}
        </div>
      </Container>
      

    {/* <Hero /> */}
    <div className="main-content">
    <h1 className="main-title">Nieuws</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, eaque sapiente? In reprehenderit aspernatur aliquam aperiam exercitationem id non accusantium maiores sequi eveniet provident tempora perferendis perspiciatis consequatur alias, itaque laboriosam corporis assumenda quas dignissimos dolorum tempore placeat? Esse quis praesentium maiores iusto veniam exercitationem quibusdam fuga mollitia officia, facere aliquam blanditiis cum fugit minus rerum quo quaerat dolores dolor nam, molestias tempora dolore? In sit recusandae odio omnis et aliquam molestiae iusto atque dignissimos amet hic deleniti facilis non praesentium sint delectus culpa perferendis distinctio, ducimus impedit optio eos. Sit ullam nostrum non ex rem dolor, quibusdam nobis rerum.
      </p>
    </div>
    
    
  </Layout>
)


export default IndexPage

export const pageQuery = graphql `
    query {
        bannerPhotos: allFile(
            filter: {relativeDirectory: {eq: "bg"}}
            sort: {fields: base, order: ASC}
          ) {
            edges {
              node {
                id
                base
                childImageSharp {
                  fluid( maxWidth: 1400, maxHeight: 700, fit: COVER, cropFocus: CENTER ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
    }
`