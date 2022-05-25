import React from 'react'

interface PostContentProps {
  html: string
}

const PostContent: React.FC<PostContentProps> = function ({ html }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      className="markdown flex flex-col container mx-auto px-[10%] py-[5%]"
    />
  )
}

export default PostContent
