import React from 'react'
import ProfileImage from 'components/Main/ProfileImage'
import TypingText from 'components/Commons/TypingText'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Introduction: React.FC<IntroductionProps> = function ({ profileImage }) {
  const CATEGORY_LIST = [
    {
      img: 'bi bi-github',
      name: 'GITHUB',
      herf: 'https://github.com/moogieon',
    },
    { img: 'bi bi-code-square ', name: 'PORTFOLIEO', herf: 'dd' },
  ]

  return (
    <header
      className="py-20 md:py-10"
      style={{
        backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
      }}
    >
      <div className="flex justify-between container mx-auto lg:px-[10%]">
        <div>
          <ProfileImage profileImage={profileImage} />
          <div className="mt-10 text-white md:text-sm">
            <div>Nice to Meet You,</div>
            <div className="text-2xl  md:text-xl">
              I'm Junior Frontend Developer{' '}
            </div>
            <TypingText />
          </div>
        </div>
        <ul className="flex flex-col gap-10 md:text-xs">
          {CATEGORY_LIST.map((data, idx) => (
            <div className="px-2 py-1 hover:animate-bounce flex gap-2">
              <i className={`text-lg   md:text-base ${data.img}`}></i>
              <a key={idx} href={data.herf} className="text-lg md:text-base">
                {data.name}
              </a>
            </div>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Introduction
