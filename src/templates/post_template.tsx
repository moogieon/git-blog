import Template from 'components/Commons/Template'
import { graphql } from 'gatsby'
import React from 'react'

type PostTemplateProps = {}

const PostTemplate: React.FC<PostTemplateProps> = function (props) {
  console.log(props)

  return <Template>Post Template</Template>
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
