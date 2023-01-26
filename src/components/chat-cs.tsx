import './scrollbar.css'
import { useAtomValue, useSetAtom } from 'jotai'
import { useResetAtom } from 'jotai/utils'
import { useEffect, useMemo, useRef } from 'react'
import { useScroll } from 'react-use'
import useSWR from 'swr'
import { faker } from '@faker-js/faker'
import { Transition } from '@headlessui/react'

import ArrowBack from '../assets/arrow-back.svg'
import Close from '../assets/close.svg'
import { chatAtom } from '../store/chat-state'
import { isShowInboxState, isShowMenuState } from '../store/popover-state'
import ChatMessage, { ChatMessageProps } from './chat-message'
import DateDivider from './date-divider'
import NewMessageDivider from './new-message-divider'
import { User } from '../utils/types'
import clsxm from '../utils/clsxm'
import { groupName } from '../utils/chats'

const ChatCs = () => {
  const resetChatState = useResetAtom(chatAtom)
  const setIsShowMenu = useSetAtom(isShowMenuState)
  const setIsShowInbox = useSetAtom(isShowInboxState)

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

      <div className="relative flex w-full flex-col items-center">
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

export default ChatCs
