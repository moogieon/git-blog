import React from 'react'
import ProfileImage from 'components/Main/ProfileImage'
import TypingText from 'components/Commons/TypingText'

const Introduction: React.FC = function () {
  const CATEGORY_LIST = [
    { img: '', name: 'GITHUB', herf: 'https://github.com/moogieon' },
    { img: '', name: 'PORTFOLIEO', herf: 'dd' },
  ]

  return (
    <header
      className="py-20 md:py-10"
      style={{
        backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
      }}
    >
      <div className="flex justify-between container mx-auto md:px-[10%]">
        <div>
          <ProfileImage />
          <div className="mt-10 text-white md:text-sm">
            <div>Nice to Meet You,</div>
            <div className="text-2xl  md:text-xl">
              I'm Junior Frontend Developer{' '}
            </div>
            <TypingText />
          </div>
        </div>
        <ul className="flex flex-col  md:text-xs">
          {CATEGORY_LIST.map((data, idx) => (
            <a key={idx} href={data.herf} className="mb-10">
              {data.name}
            </a>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Introduction
