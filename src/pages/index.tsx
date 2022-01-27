import Introduction from 'components/Main/Introduction'
import { Link } from 'gatsby'
import React, { FC } from 'react'

const IndexPage: FC = function () {
  return (
    <>
      <div>
        <Introduction />
        <Link to="/info/">To Info</Link>
      </div>
    </>
  )
}

export default IndexPage
