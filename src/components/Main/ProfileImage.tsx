import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

const ProfileImage: React.FC<ProfileImageProps> = function ({ profileImage }) {
  return (
    <GatsbyImage
      image={profileImage}
      alt="Profile Image"
      style={{ borderRadius: '50%' }}
    />
  )
}

export default ProfileImage
