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

    <Link className='flex flex-col rounded-[10px] transition-shadow'>
        <img className='w-full h-200px rounded-t-10px rounded-r-10px object-cover' src={thumbnail} alt="Post Item Image"/>
        <div className='flex-1 flex flex-col p-15px'>
            <h1>{title}</h1>
            <p>{date}</p>

        </div>
    </Link>
  )
}

export default PostItem
