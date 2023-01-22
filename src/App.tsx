import { useState } from 'react'
import { Transition } from '@headlessui/react'

import Container from './components/container'
import lightningIcon from './assets/lightning.svg'
import messagingIcon from './assets/messaging.svg'
import todoIcon from './assets/todo.svg'

export default function App() {
  const [isShowingMenu, setIsShowingMenu] = useState(false)

  return (
    <Container>
      <div className="absolute bottom-0 right-0 m-6 flex gap-5">
        <Transition show={isShowingMenu} className="flex gap-5">
          <Transition.Child
            enter="transition ease-in-out duration-500 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="-translate-x-0 opacity-100"
            leave="transition ease-in-out duration-100 transform"
            leaveFrom="-translate-x-0 opacity-100"
            leaveTo="translate-x-full opacity-0"
            className="flex flex-col relative"
          >
            <span className="absolute -top-8 left-3 z-10 text-[#F2F2F2] font-bold">Task</span>
            <button
              className="p-4 bg-[#F2F2F2] rounded-full hover:bg-gray-300 transition-colors duration-300"
              onClick={() => setIsShowingMenu(prev => !prev)}
            >
              <img src={todoIcon} alt="Lightning" width={12} height={12} className="h-8 w-8" />
            </button>
          </Transition.Child>
          <Transition.Child
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="-translate-x-0 opacity-100"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="-translate-x-0 opacity-100"
            leaveTo="translate-x-full opacity-0"
            className="flex flex-col relative"
          >
            <span className="absolute -top-8 left-2 z-10 text-[#F2F2F2] font-bold">Inbox</span>
            <button
              className="p-4 bg-[#F2F2F2] rounded-full hover:bg-gray-300 transition-colors duration-300"
              onClick={() => setIsShowingMenu(prev => !prev)}
            >
              <img src={messagingIcon} alt="Lightning" width={12} height={12} className="h-8 w-8" />
            </button>
          </Transition.Child>
        </Transition>
        <button
          className="p-4 bg-[#2F80ED] rounded-full focus:bg-blue-600 transition-colors duration-300"
          onClick={() => setIsShowingMenu(prev => !prev)}
        >
          <img src={lightningIcon} alt="Lightning" width={12} height={12} className="h-8 w-8" />
        </button>
      </div>
    </Container>
  )
}
