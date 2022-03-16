import React, { FC } from 'react'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    // 프로퍼티 이름은 문자열, 프로퍼티 값은 숫자임을 나타내는 타입 표기 방법
    [key: string]: number
  }
}

const CategoryList: FC<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <>
      <div className="py-20 border-b ">
        <div className="flex justify-around w-768px mx-auto container ">
          {Object.entries(categoryList).map(([name, count]) => (
            <div key={name} className="mr-[20px] py[5px] ">
              #{name}({count})
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CategoryList
