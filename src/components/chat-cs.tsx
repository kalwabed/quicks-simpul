import './scrollbar.css'
import './loading.css'
import { useSetAtom } from 'jotai'
import { useResetAtom } from 'jotai/utils'
import { useEffect, useMemo, useState } from 'react'
import { faker } from '@faker-js/faker'
import { Transition } from '@headlessui/react'

import ArrowBack from '../assets/arrow-back.svg'
import Close from '../assets/close.svg'
import { chatAtom } from '../store/chat-state'
import { isShowInboxState, isShowMenuState } from '../store/popover-state'
import ChatMessage, { ChatMessageProps } from './chat-message'
import clsxm from '../utils/clsxm'

const ChatCs = () => {
  const resetChatState = useResetAtom(chatAtom)
  const setIsShowMenu = useSetAtom(isShowMenuState)
  const setIsShowInbox = useSetAtom(isShowInboxState)
  const [isLoading, setIsLoading] = useState(false)

  const chats = useMemo<ChatMessageProps[]>(() => {
    return [
      {
        colorScheme: 'white',
        content: faker.random.words(faker.datatype.number({ min: 4, max: 32 })),
        createdAt: new Date(faker.datatype.datetime()),
        sender: 'FastVisa Support',
      },
      {
        colorScheme: 'purple',
        content: faker.random.words(faker.datatype.number({ min: 4, max: 32 })),
        createdAt: new Date(faker.datatype.datetime()),
      },
    ]
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 500)
  }, [])

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
              <span className={clsxm('text-lg font-bold text-blue-600')}>FastVisa Support</span>
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

      <div className="custom_scroll flex h-[737px] w-full flex-col gap-4 overflow-y-auto px-5 py-4">
        {chats.map(chat => (
          <ChatMessage key={chat.createdAt.getTime()} {...chat} />
        ))}
      </div>

      <div className="relative flex w-full flex-col items-center px-5">
        <Transition
          show={isLoading}
          enter="transition duration-200 ease-out"
          enterFrom="transform translate-y-8 opacity-0"
          enterTo="transform translate-y-0 opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform translate-y-0 opacity-100"
          leaveTo="transform translate-y-8 opacity-0"
          className="inline-flex w-full items-center gap-4 rounded-md bg-blue-100 p-4 text-sm font-medium text-gray-700"
        >
          <svg className="ring_loading" viewBox="25 25 50 50" stroke-width="5">
            <circle cx="50" cy="50" r="20" />
          </svg>
          <p>Please wait while we connect you with one of our team...</p>
        </Transition>
        <div className="inline-flex w-full items-center gap-4 py-4">
          <input
            disabled={isLoading}
            type="text"
            className="w-full rounded-lg border px-4 py-2.5 outline-none transition hover:border-gray-300 focus:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Type a new message"
          />
          <button
            disabled={isLoading}
            className="appearance-none rounded-lg bg-blue-500 py-2 px-5 font-bold text-white outline-none transition hover:bg-blue-600 focus-visible:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </>
  )
}

export default ChatCs
