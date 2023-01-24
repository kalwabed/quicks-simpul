import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative h-full w-full overflow-hidden bg-[#333333]">{children}</div>
}

export default Container
