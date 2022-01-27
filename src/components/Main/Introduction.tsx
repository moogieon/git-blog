import React, { FC } from 'react'
import ProfileImage from 'components/Main/ProfileImage'

const Introduction: FC = function () {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
      }}
    >
      <div>
        <ProfileImage />
        <div>
          <div>Nice to Meet You,</div>
          <div>I'm Junior Frontend Developer </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
