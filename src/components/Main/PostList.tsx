import React from 'react'
import PostItem from './PostItem'
import { PostListItemType } from 'types/PostItem.types'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'

type PostListProps = {
  posts: PostListItemType[]
  selectedCategory: string
}

const PostList: React.FC<PostListProps> = function ({
  selectedCategory,
  posts,
}) {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )
  return (
    <div className="mx-auto container">
      <div
        className="grid grid-cols-[1fr,1fr] gap-[20px] pt-[50px] pb-[100px] md:grid-cols-1 md:pt-[0px] md:px-[10%]"
        ref={containerRef}
      >
        {postList.map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter,
            },
          }: PostListItemType) => (
            <PostItem {...frontmatter} link={slug} key={id} />
          ),
        )}
      </div>
    </div>
  )
}

export default PostList
