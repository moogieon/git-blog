import { Link } from 'gatsby'
import React from 'react'

interface CategoryItem {
  active: boolean
  to: string
}

const CategoryItem: React.FC<CategoryItem> = function ({ active, ...props }) {
  return (
    <div
      className={`inline duration-100 px-2 py-1 text-center min-w-[100px] ${
        active ? 'bg-blue-200  rounded-2xl' : 'font-base'
      }`}
    >
      <Link
        {...props}
        className={`cursor-pointer hover:font-bold duration-100  ${
          active ? 'font-bold  ' : 'font-base'
        }`}
      />
    </div>
  )
}
export default CategoryItem
