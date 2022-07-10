import React from 'react'

const Layout = ({children, className}) => {
  return (
    <div className={`bg-slate-50 min-h-screen p-4 ${className}`}>{children}</div>
  )
}

export default Layout