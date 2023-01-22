import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full w-full relative">{children}</div>
}

export default Container
