import React from 'react'
import PostItem from './PostItem'

const PostList: React.FC = function () {
  const POST_ITEM_DATA = {
    title: 'Post Item Title',
    date: '2020.01.29.',
    categories: ['Web', 'Frontend', 'Testing'],
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
    thumbnail:
      'https://cdn.pixabay.com/photo/2016/10/27/09/59/brain-1773885_1280.png',
    link: '<https://www.google.co.kr/>',
  }
  return (
    <>
      <div className="mx-auto container">
        <div className="grid grid-cols-[1fr,1fr] gap-[2%] pt-[50px] md:pb-[100px] md:grid-cols-1 md:py-[50px] md:px-[10%]">
          <PostItem {...POST_ITEM_DATA} />
          <PostItem {...POST_ITEM_DATA} />
          <PostItem {...POST_ITEM_DATA} />
          <PostItem {...POST_ITEM_DATA} />
        </div>
      </div>
    </>
  )
}

export default PostList
