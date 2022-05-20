import React, { ReactNode } from 'react'
import Footer from 'components/Commons/Footer'

type TemplateProps = {
  children: ReactNode
}

const Template: React.FC<TemplateProps> = function ({ children }) {
  return (
    <div className="flex flex-col h-[100vh]">
      {children}
      <Footer />
    </div>
  )
}

export default Template
