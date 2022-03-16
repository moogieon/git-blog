import React from 'react'
import { Link } from 'gatsby'

type InfoPageProps = {}

const InfoPage: React.FC<InfoPageProps> = function () {
  return (
    <div className="bg-gray-300">
      <div className="container mx-auto">
        <Link to="/">To Main</Link>
      </div>
    </div>
  )
}

export default InfoPage
