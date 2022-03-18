import React from 'react'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    // 프로퍼티 이름은 문자열, 프로퍼티 값은 숫자임을 나타내는 타입 표기 방법
    [key: string]: number
  }
}

const CategoryList: React.FC<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <>
      <div className="py-20 ">
        <div className="mx-auto container">
          <div className="flex flex-wrap">
            {Object.entries(categoryList).map(([name, count]) => (
              <div key={name} className="mr-[20px] py[5px] cursor-pointer ">
                #{name}({count})
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryList
