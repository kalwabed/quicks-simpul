import './scrollbar.css'
import { useSetAtom } from 'jotai'
import { useResetAtom } from 'jotai/utils'
import { useRef } from 'react'
import { useScroll } from 'react-use'

import ArrowBack from '../assets/arrow-back.svg'
import Close from '../assets/close.svg'
import { chatAtom } from '../store/chat-state'
import { isShowInboxState, isShowMenuState } from '../store/popover-state'
import ChatMessage from './chat-message'
import DateDivider from './date-divider'
import NewMessageDivider from './new-message-divider'
import { Transition } from '@headlessui/react'

const ChatDetail = () => {
  const resetChatState = useResetAtom(chatAtom)
  const setIsShowMenu = useSetAtom(isShowMenuState)
  const setIsShowInbox = useSetAtom(isShowInboxState)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { y } = useScroll(scrollRef)

  return (
    <>
      <div className="h-full w-full border-b border-[#BDBDBD] bg-white shadow">
        <div className="flex items-center justify-between py-5 px-4">
          <div className="flex items-center">
            <button
              className="inline-flex appearance-none p-2 pr-0 outline-none transition hover:opacity-70 focus-visible:ring"
              onClick={() => resetChatState()}
            >
              <ArrowBack aria-label="Back icon" />
            </button>
            <div className="ml-4 flex flex-col">
              <span className="text-lg font-bold text-blue-600">John Doe</span>
              <span className="text-sm text-gray-800">Online</span>
            </div>
          </div>

          <button
            className="p-2 outline-none transition hover:opacity-70 focus-visible:ring"
            onClick={() => {
              setIsShowMenu(false)
              setIsShowInbox(false)
            }}
          >
            <Close />
          </button>
        </div>
      </div>

      <div className="custom_scroll flex max-h-[737px] w-full flex-col gap-4 overflow-y-auto px-5 py-4" ref={scrollRef}>
        <ChatMessage
          colorScheme="purple"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quia illum aperiam optio unde perferendis praesentium impedit fugiat sequi explicabo."
          createdAt={new Date()}
        />
        <ChatMessage
          sender="Yusuf"
          colorScheme="yellow"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quia illum aperiam optio unde perferendis praesentium impedit fugiat sequi explicabo."
          createdAt={new Date()}
        />
        <DateDivider />
        <ChatMessage
          colorScheme="purple"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quia illum aperiam optio unde perferendis praesentium impedit fugiat sequi explicabo."
          createdAt={new Date()}
        />
        <ChatMessage
          colorScheme="purple"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quia illum aperiam optio unde perferendis praesentium impedit fugiat sequi explicabo."
          createdAt={new Date()}
        />
        <NewMessageDivider />
        <ChatMessage
          colorScheme="purple"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quia illum aperiam optio unde perferendis praesentium impedit fugiat sequi explicabo."
          createdAt={new Date()}
        />
      </div>

      <div className="relative flex w-full flex-col items-center">
        <Transition
          show={y < 100}
          enter="transition duration-200 ease-out"
          enterFrom="transform translate-y-4 opacity-0"
          enterTo="transform translate-y-0 opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform translate-y-0 opacity-100"
          leaveTo="transform translate-y-4 opacity-0"
          className="absolute bottom-20 rounded-lg bg-blue-100 py-2 px-3 text-blue-700 shadow-md outline-none"
          as="button"
          onClick={() => {
            scrollRef.current?.scrollTo({ top: y + 500, behavior: 'smooth' })
          }}
        >
          New message
        </Transition>
        <div className="inline-flex w-full items-center gap-4 px-5 py-4">
          <input
            type="text"
            className="w-full rounded-lg border px-4 py-2.5 outline-none transition hover:border-gray-300 focus:border-gray-400"
            placeholder="Type a new message"
          />
          <button className="appearance-none rounded-lg bg-blue-500 py-2 px-5 font-bold text-white outline-none transition hover:bg-blue-600 focus-visible:bg-blue-700">
            Send
          </button>
        </div>
      </div>
    </>
  )
}

export default ChatDetail
