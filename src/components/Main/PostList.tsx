import React, { useMemo } from 'react'
import PostItem from './PostItem'
import { PostListItemType } from 'types/PostItem.types'

type PostListProps = {
  posts: PostListItemType[]
  selectedCategory: string
}

const PostList: React.FC<PostListProps> = function ({
  selectedCategory,
  posts,
}) {
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  )
  return (
    <>
      <div className="mx-auto container">
        <div className="grid grid-cols-[1fr,1fr] gap-[2%] pt-[50px] md:pb-[100px] md:grid-cols-1 md:py-[50px] md:px-[10%]">
          {postListData.map(
            ({ node: { id, frontmatter } }: PostListItemType) => (
              <PostItem
                {...frontmatter}
                link="https://www.google.co.kr/"
                key={id}
              />
            ),
          )}
        </div>
      </div>
    </>
  )
}

export default PostList
