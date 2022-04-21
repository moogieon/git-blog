import { Link } from 'gatsby'
import React from 'react'

import { PostFrontmatterType } from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType & { link: string }

const PostItem: React.FC<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: { publicURL },
  link,
}) {
  return (
    <Link
      className="flex flex-col rounded-[10px] border cursor-pointer transition-shadow shadow-lg hover:shadow-2xl"
      to={link}
    >
      <img
        className="w-full h-[200px] rounded-t-[10px] rounded-r-[10px] object-cover"
        src={publicURL}
        alt="Post Item Image"
      />
      <div className="flex-1 flex flex-col p-[15px]">
        <h1 className="line-clamp-2 mb-[3px] whitespace-normal font-700 text-xl">
          {title}
        </h1>
        <p className="text-sm font-400 opacity-50">{date}</p>
        <div className="flex flex-wrap mx-[-5px] my-[10px]">
          {categories.map((categorie, idx) => (
            <p
              key={idx}
              className="my-[2.5px] mx-[5px] py-[3px] px-[5px] rounded-[3px] border bg-black text-sm font-700 text-white "
            >
              {categorie}
            </p>
          ))}
        </div>
        <p className="line-clamp-2  opacity-80">{summary}</p>
      </div>
    </Link>
  )
}

export default PostItem
