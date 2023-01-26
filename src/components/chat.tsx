import { useSetAtom } from 'jotai'
import Avvvatars from 'avvvatars-react'

import { Chat as ChatType } from '../utils/types'
import { chatAtom } from '../store/chat-state'

const Chat = (props: ChatType) => {
  const { createdAt, id, isGroup, lastMessage, name } = props
  const setChatState = useSetAtom(chatAtom)

  return (
    <button
      className="flex flex-col rounded-t border-b border-gray-200 px-2 pb-8 pt-4 shadow-sm outline-none transition duration-300 hover:bg-gray-100 focus:bg-gray-200"
      onClick={() => setChatState(id)}
    >
      <div className="flex">
        {isGroup ? (
          <div className="relative flex">
            <Avvvatars value={lastMessage.sender as string} style="shape" size={35} />
            <span className="absolute left-5">
              <Avvvatars value={name} style="shape" size={35} />
            </span>
          </div>
        ) : (
          <Avvvatars value={name} size={35} />
        )}
        <div className="ml-8 flex flex-col">
          <div className="flex items-center gap-4">
            <span className="font-bold text-blue-500">{name}</span>
            <span className="text-sm font-light">{createdAt.toLocaleDateString()}</span>
          </div>
          <b className="mt-1 text-left text-sm font-bold">{lastMessage.sender}</b>
          <p className="text-left text-sm text-[#4F4F4F]">{lastMessage.content}</p>
        </div>
      </div>
    </button>
  )
}

export default Chat
