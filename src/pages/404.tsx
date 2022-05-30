import React from 'react'

import { Link } from 'gatsby'

const NotFoundPage: React.FC = function () {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] ">
      <div className="text-[150px] font-[800] md:text-[100px]">404</div>
      <div className="text-[25px] text-center leading-[1.3] md:text-[20px]">
        찾을 수 없는 페이지입니다. <br />
        다른 콘텐츠를 보러 가보시겠어요?
      </div>
      <Link className="mt-[30px] text-[20px] underline hover:underline" to="/">
        메인으로
      </Link>
    </div>
  )
}

export default NotFoundPage
