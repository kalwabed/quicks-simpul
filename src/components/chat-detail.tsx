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

const ChatDetail = () => {
  const resetChatState = useResetAtom(chatAtom)
  const chatState = useAtomValue(chatAtom)
  const setIsShowMenu = useSetAtom(isShowMenuState)
  const setIsShowInbox = useSetAtom(isShowInboxState)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const { y } = useScroll(scrollRef)
  const { data, isLoading } = useSWR<User>(`/users/${chatState}`, async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${chatState}`)
    return res.json()
  })

  const scrollToBottom = (): void => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }

  const chats = useMemo<ChatMessageProps[]>(() => {
    return [
      {
        colorScheme: 'yellow',
        content: faker.random.words(faker.datatype.number({ min: 4, max: 32 })),
        createdAt: new Date(faker.datatype.datetime()),
        sender: faker.name.fullName(),
      },
      {
        colorScheme: 'purple',
        content: faker.random.words(faker.datatype.number({ min: 4, max: 32 })),
        createdAt: new Date(faker.datatype.datetime()),
      },
      {
        colorScheme: 'yellow',
        content: faker.random.words(faker.datatype.number({ min: 4, max: 32 })),
        createdAt: new Date(faker.datatype.datetime()),
        sender: faker.name.fullName(),
      },
      {
        colorScheme: 'purple',
        content: faker.random.words(faker.datatype.number({ min: 4, max: 32 })),
        createdAt: new Date(faker.datatype.datetime()),
      },
      {
        colorScheme: 'yellow',
        content: faker.random.words(faker.datatype.number({ min: 4, max: 32 })),
        createdAt: new Date(faker.datatype.datetime()),
        sender: faker.name.fullName(),
      },
      {
        colorScheme: 'purple',
        content: faker.random.words(faker.datatype.number({ min: 4, max: 32 })),
        createdAt: new Date(faker.datatype.datetime()),
      },
      {
        colorScheme: 'yellow',
        content: faker.random.words(faker.datatype.number({ min: 4, max: 32 })),
        createdAt: new Date(faker.datatype.datetime()),
        sender: faker.name.fullName(),
      },
      {
        colorScheme: 'purple',
        content: faker.random.words(faker.datatype.number({ min: 4, max: 32 })),
        createdAt: new Date(faker.datatype.datetime()),
      },
      {
        colorScheme: 'yellow',
        content: faker.random.words(faker.datatype.number({ min: 4, max: 32 })),
        createdAt: new Date(faker.datatype.datetime()),
        sender: faker.name.fullName(),
      },
      {
        colorScheme: 'yellow',
        content: faker.random.words(faker.datatype.number({ min: 4, max: 32 })),
        createdAt: new Date(faker.datatype.datetime()),
        sender: faker.name.fullName(),
      },
    ]
  }, [])

  // make user scroll to bottom when user is first time open chat detail before page is loaded
  useEffect(() => {
    scrollToBottom()
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
              <span
                className={clsxm(
                  'text-lg font-bold text-blue-600',
                  isLoading ? 'h-7 w-44 animate-pulse bg-gray-200 p-1' : ''
                )}
              >
                {!isLoading && groupName(data.address.suite, data.address.street)}
              </span>
              <span className="text-sm text-gray-800">3 Participants</span>
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
        {chats.slice(0, 7).map(chat => (
          <ChatMessage key={chat.createdAt.getTime()} {...chat} />
        ))}
        <DateDivider />
        {chats.slice(7, 8).map(chat => (
          <ChatMessage key={chat.createdAt.getTime()} {...chat} />
        ))}
        <NewMessageDivider />

        <ChatMessage {...chats[chats.length - 1]} />
      </div>

      <div className="relative flex w-full flex-col items-center">
        <Transition
          show={y < scrollRef?.current?.scrollHeight - 800}
          enter="transition duration-200 ease-out"
          enterFrom="transform translate-y-4 opacity-0"
          enterTo="transform translate-y-0 opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform translate-y-0 opacity-100"
          leaveTo="transform translate-y-4 opacity-0"
          className="absolute bottom-20 rounded-lg bg-blue-100 py-2 px-3 text-blue-700 shadow-md outline-none"
          as="button"
          onClick={scrollToBottom}
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
