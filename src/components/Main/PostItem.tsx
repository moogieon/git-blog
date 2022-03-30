import { Link } from 'gatsby'
import React from 'react'

type PostItemProps = {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: string
  link: string
}

const PostItem: React.FC<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail,
  link,
}) {
  return (
    <Link className="flex flex-col rounded-[10px]  border cursor-pointer transition-shadow shadow-lg hover:shadow-2xl">
      <img
        className="w-full h-[200px] border rounded-t-[10px] rounded-r-[10px] object-cover"
        src={thumbnail}
        alt="Post Item Image"
      />
      <div className="flex-1 flex flex-col p-[15px]">
        <h1 className="line-clamp-2 mb-[3px] whitespace-normal font-700 text-xl">
          {title}
        </h1>
        <p className="text-sm font-400 opacity-[0.7]">{date}</p>
        <div className="flex flex-wrap mt-[10px] mx-[-5px] my-[10px]">
          {categories}
        </div>
        <p className=""></p>
        <p className=""></p>
      </div>
    </Link>
  )
}

export default PostItem
