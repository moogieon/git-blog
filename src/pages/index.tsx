import CategoryList from 'components/Main/CategoryList'
import Introduction from 'components/Main/Introduction'
import { Link } from 'gatsby'
import React from 'react'

const CATEGORY_LIST = {
  Project: 4,
  Blog:5,
}
const IndexPage: React.FC = function () {
  return (
    <>
      <div>
        <Introduction />
        <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
        <Link to="/info/">To Info</Link>
      </div>
    </>
  )
}

export default IndexPage
