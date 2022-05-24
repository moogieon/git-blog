import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import PostHeadInfo, { PostHeadInfoProps } from './PostHeadInfo'

type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData
}

const PostHead: React.FC<PostHeadProps> = function (
  { thumbnail, title, date, categories },
  props: GatsbyImgProps,
) {
  return (
    <div className="relative w-full h-[400px]">
      <GatsbyImage
        {...props}
        image={thumbnail}
        alt="thumbnail"
        className="!absolute -z-10 w-full h-[400px] bg-cover brightness-[0.3]"
      />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </div>
  )
}

export default PostHead
