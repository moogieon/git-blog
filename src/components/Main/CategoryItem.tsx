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
      className={`cursor-pointer hover:font-bold ${
        active ? 'font-bold' : 'font-base'
      }`}
    />
  )
}
export default CategoryItem
