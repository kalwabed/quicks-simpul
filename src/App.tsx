import { useState } from 'react'
import { Transition } from '@headlessui/react'

import Container from './components/container'
import lightning from './assets/lightning.svg'

export default function App() {
  const [isShowingMenu, setIsShowingMenu] = useState(false)

  return (
    <Container>
      <div className="absolute bottom-0 right-0 m-6 flex gap-5 overflow-hidden">
        <Transition show={isShowingMenu} className="flex gap-5">
          <Transition.Child
            enter="transition ease-in-out duration-500 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="-translate-x-0 opacity-100"
            leave="transition ease-in-out duration-100 transform"
            leaveFrom="-translate-x-0 opacity-100"
            leaveTo="translate-x-full opacity-0"
          >
            <button className="p-4 bg-[#2F80ED] rounded-full" onClick={() => setIsShowingMenu(prev => !prev)}>
              <img src={lightning} alt="Lightning" width={12} height={12} className="h-8 w-8" />
            </button>
          </Transition.Child>
          <Transition.Child
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="-translate-x-0 opacity-100"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="-translate-x-0 opacity-100"
            leaveTo="translate-x-full opacity-0"
          >
            <button className="p-4 bg-[#2F80ED] rounded-full" onClick={() => setIsShowingMenu(prev => !prev)}>
              <img src={lightning} alt="Lightning" width={12} height={12} className="h-8 w-8" />
            </button>
          </Transition.Child>
        </Transition>
        <button
          className="p-4 bg-[#2F80ED] rounded-full focus:bg-blue-600 transition-colors duration-300"
          onClick={() => setIsShowingMenu(prev => !prev)}
        >
          <img src={lightning} alt="Lightning" width={12} height={12} className="h-8 w-8" />
        </button>
      </div>
    </Container>
  )
}
