const NewMessageDivider = () => {
  return (
    <div className="flex w-full items-center justify-center gap-8 font-medium">
      <div className="h-[1px] w-64  bg-red-500"></div>
      <span className="w-fit align-super text-red-600">New Message</span>
      <div className="h-[1px] w-64  bg-red-500"></div>
    </div>
  )
}

export default NewMessageDivider
