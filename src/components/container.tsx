import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full w-full relative bg-[#333333]">{children}</div>
}

export default Container
