import React, { FC } from 'react'

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
const PROFILE_IMAGE_LINK =
  'https://user-images.githubusercontent.com/96406855/151113671-6d90c87c-c261-410b-855a-dd12beb0601d.png'

const ProfileImage: FC = function () {
  return (
    <img
      src={PROFILE_IMAGE_LINK}
      alt="Profile Image"
      className="rounded-full h-48 w-50"
    />
  )
}

export default ProfileImage
