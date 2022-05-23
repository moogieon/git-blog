import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}

type PostHeadProps = {
  thumbnail: IGatsbyImageData
}

const PostHead: React.FC<PostHeadProps> = function (
  { thumbnail },
  props: GatsbyImgProps,
) {
  return (
    <div className="relative w-full h-[400px]">
      <GatsbyImage
        {...props}
        image={thumbnail}
        alt="thumbnail"
        className="!absolute -z-1 w-full h-[400px] bg-cover brightness-[0.25]"
      />
    </div>
  )
}

export default PostHead
