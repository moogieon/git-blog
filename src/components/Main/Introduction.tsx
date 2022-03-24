import React, { FC } from 'react'
import ProfileImage from 'components/Main/ProfileImage'
import TypingText from 'components/Commons/TypingText'

const Introduction: FC = function () {
  const CATEGORY_LIST = [
    { img: '', name: 'GITHUB', herf: 'https://github.com/moogieon' },
    { img: '', name: 'PORTFOLIEO', herf: 'dd' },
  ]

  return (
    <header
      className="py-20"
      style={{
        backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
      }}
    >
      <div className="flex justify-between container mx-auto">
        <div>
          <ProfileImage />
          <div className="mt-10 text-white">
            <div>Nice to Meet You,</div>
            <div className="text-2xl">I'm Junior Frontend Developer </div>
            <TypingText />
          </div>
        </div>
        <ul>
          {CATEGORY_LIST.map((data, idx) => (
            <a key={idx} href={data.herf}>
              {data.name}
            </a>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Introduction
