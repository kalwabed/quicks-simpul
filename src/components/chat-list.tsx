import SearchIcon from '../assets/search.svg'
import Chat from './chat'

export interface Chat {
  id: string
  name: string
  lastMessage: {
    content: string
    sender?: string
  }
  createdAt: Date
  isGroup: boolean
}

const dummyData: Chat[] = [
  {
    id: '1',
    name: 'John Doe',
    lastMessage: {
      content: 'Hello',
    },
    createdAt: new Date(),
    isGroup: false,
  },
  {
    id: '2',
    name: 'Foodies',
    lastMessage: {
      content: 'Hello',
      sender: 'Erica',
    },
    createdAt: new Date(),
    isGroup: true,
  },
]

const ChatList = () => {
  return (
    <div className="flex max-h-[737px] w-full flex-1 flex-col overflow-hidden">
      <div className="relative">
        <input
          placeholder="Search"
          className="inline-flex w-full rounded border-2 border-[#828282] px-2.5 py-0.5 outline-none transition duration-300 ease-in-out focus:border-transparent focus:ring"
        />
        <SearchIcon className="absolute top-2.5 right-7" />
      </div>

      <div className="mt-6 flex min-h-[737px] flex-1 flex-col overflow-y-auto">
        {dummyData.map((v, i) => (
          <Chat key={v.id} {...v} />
        ))}
      </div>
    </div>
  )
}

export default ChatList
