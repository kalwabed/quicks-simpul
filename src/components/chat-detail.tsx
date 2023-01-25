import './scrollbar.css'
import { useSetAtom } from 'jotai'
import { useResetAtom } from 'jotai/utils'

import ArrowBack from '../assets/arrow-back.svg'
import Close from '../assets/close.svg'
import { chatAtom } from '../store/chat-state'
import { isShowInboxState, isShowMenuState } from '../store/popover-state'
import ChatMessage from './chat-message'

const ChatDetail = () => {
  const resetChatState = useResetAtom(chatAtom)
  const setIsShowMenu = useSetAtom(isShowMenuState)
  const setIsShowInbox = useSetAtom(isShowInboxState)

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

      <div className="custom_scroll flex max-h-[737px] w-full flex-col gap-4 overflow-y-auto px-5 py-4">
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
        <ChatMessage
          colorScheme="purple"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quia illum aperiam optio unde perferendis praesentium impedit fugiat sequi explicabo."
          createdAt={new Date()}
        />
      </div>

      <div className="inline-flex w-full items-center gap-4 px-5 py-4">
        <input
          type="text"
          className="w-full rounded-lg border px-4 py-2.5 outline-none transition hover:border-gray-300 focus:border-gray-400"
          placeholder="Type a new message"
        />
        <button className="appearance-none rounded-lg bg-blue-500 py-2 px-5 font-bold text-white outline-none transition hover:bg-blue-600 focus:bg-blue-700">
          Send
        </button>
      </div>
    </>
  )
}

export default ChatDetail
