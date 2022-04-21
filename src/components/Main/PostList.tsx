import React from 'react'
import PostItem from './PostItem'
import { PostListItemType } from 'types/PostItem.types'

type PostListProps = {
  posts: PostListItemType[]
}

const PostList: React.FC<PostListProps> = function ({ posts }) {
  return (
    <>
      <div className="mx-auto container">
        <div className="grid grid-cols-[1fr,1fr] gap-[2%] pt-[50px] md:pb-[100px] md:grid-cols-1 md:py-[50px] md:px-[10%]">
          {posts.map(({ node: { id, frontmatter } }: PostListItemType) => (
            <PostItem
              {...frontmatter}
              link="https://www.google.co.kr/"
              key={id}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default PostList
