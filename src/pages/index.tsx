import CategoryList from 'components/Main/CategoryList'
import Introduction from 'components/Main/Introduction'
import { Link } from 'gatsby'
import React, { FC } from 'react'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}
const IndexPage: FC = function () {
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
