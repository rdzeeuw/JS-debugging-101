// const path = require('path')

// exports.createPages = async ({actions, graphql}) => {
//   const { data } = await graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//             node {
//                 id
//                 frontmatter {
//                     path
//                 }
//             }
//         }
//     }
// `)

//     data.allMarkdownRemark.edges.node.forEach(node => {
//       actions.createPage({
//         path: '/post/' + node.frontmatter.path,
//         component: path.resolve('./src/templates/nieuws-post.js'),
//         context: { path: node.frontmatter.path }
//       })
//     })
// }

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
  query nieuwsItems {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
        }
      }
    }
  }
  `)

data.allMarkdownRemark.nodes.forEach(node => {
  actions.createPage({ 
    path: '/pages/post/' + node.frontmatter.slug,
    component: path.resolve('./src/templates/nieuws-post.js'),
    context: { slug: node.frontmatter.slug }
   })

})


}