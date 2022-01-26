import React, { FC } from 'react'
import { Link } from 'gatsby'

type InfoPageProps = {}

const InfoPage: FC<InfoPageProps> = function () {
  return (
    <div>
      <Link to="/">To Main</Link>
    </div>
  )
}

export default InfoPage
