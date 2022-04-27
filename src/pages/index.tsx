import Footer from 'components/Commons/Footer'
import CategoryList from 'components/Main/CategoryList'
import Introduction from 'components/Main/Introduction'
import PostList from 'components/Main/PostList'
import React from 'react'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}
const IndexPage: React.FC<IndexPageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <>
      <div>
        <Introduction />
        <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
        <PostList posts={edges} />
        <Footer />
      </div>
    </>
  )
}

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
  }
`

