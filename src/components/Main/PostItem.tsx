import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { PostFrontmatterType } from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType & { link: string }

const PostItem: React.FC<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) {
  return (
    <Link
      className="parent flex flex-col rounded-[10px] cursor-pointer transition-shadow shadow-lg hover:shadow-2xl"
      to={link}
    >
      <div className="h-[200px] w-full rounded-t-[10px] overflow-hidden relative">
        <div className="child1 w-full h-full absolute inset-0 z-10 transition duration-700 transform opacity-0" />
        <GatsbyImage
          className="w-full h-full transition duration-700 child2"
          image={gatsbyImageData}
          alt="Post Item Image"
        />
      </div>
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
