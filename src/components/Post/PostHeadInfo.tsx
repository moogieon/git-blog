import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export type PostHeadInfoProps = {
  title: string
  date: string
  categories: string[]
}

const PostHeadInfo: React.FC<PostHeadInfoProps> = function ({
  title,
  date,
  categories,
}) {
  const goBackPage = () => window.history.back()

  return (
    <div className="flex flex-col w-[768px] h-full m-auto py-[60px] text-[#ffffff] ">
      <button
        className="grid place-items-center w-[40px] h-[40px] rounded-full bg-[#ffffff] text-[#000000] text-[22px]"
        onClick={goBackPage}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="" />
      </button>
      <div className="content overflow-hidden break-words mt-auto overflow-ellipsis line-clamp-2 text-[45px] font-[800] ">
        {title}
      </div>
      <div className="flex justify-between items-center mt-10px text-[18px] font-[700]">
        <div>{categories.join(' / ')}</div>
        <div>{date}</div>
      </div>
    </div>
  )
}

export default PostHeadInfo
