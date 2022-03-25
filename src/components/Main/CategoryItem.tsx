import { Link } from 'gatsby'
import React from 'react'

interface CategoryItem {
  active: boolean
  to: string
}

const CategoryItem: React.FC<CategoryItem> = function ({ active, ...props }) {
  return (
    <Link
      {...props}
      className={`mr-[20px] py[5px] cursor-pointer ${
        active ? 'font-bold' : 'font-base'
      }`}
    />
  )
}
export default CategoryItem
