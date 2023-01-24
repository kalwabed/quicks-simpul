import { useSetAtom } from 'jotai'
import { useResetAtom } from 'jotai/utils'

import ArrowBack from '../assets/arrow-back.svg'
import Close from '../assets/close.svg'
import { chatAtom } from '../store/chat-state'
import { isShowInboxState, isShowMenuState } from '../store/popover-state'

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

      <div className="flex max-h-[737px] flex-col overflow-y-auto px-5 py-4">
        <span className="text-2xl font-bold text-gray-800">start</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">Select a chat to start messaging</span>
        <span className="text-2xl font-bold text-gray-800">end</span>
      </div>
    </>
  )
}

export default ChatDetail
