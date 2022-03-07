import React, { FC } from 'react'
import ProfileImage from 'components/Main/ProfileImage'

const Introduction: FC = function () {
  return (
    <header
      style={{
        backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
      }}
    >
      <div className="p-20 flex container mx-auto">
        <div className="ml-[15%]">
          <ProfileImage />
          <div className="mt-10 text-white">
            <div>Nice to Meet You,</div>
            <div className="text-2xl">I'm Junior Frontend Developer </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Introduction
