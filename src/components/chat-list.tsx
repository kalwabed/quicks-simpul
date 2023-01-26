import './scrollbar.css'
import './loading.css'
import { useAtomValue } from 'jotai'
import { useMemo } from 'react'
import useSWR from 'swr'
import { faker } from '@faker-js/faker'

import SearchIcon from '../assets/search.svg'
import { chatAtom } from '../store/chat-state'
import { User } from '../utils/types'
import Chat from './chat'
import ChatDetail from './chat-detail'
import clsxm from '../utils/clsxm'
import ChatCs from './chat-cs'

const ChatList = () => {
  const chatState = useAtomValue(chatAtom)
  const { data: usersData, isLoading } = useSWR<User[]>('/users', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
  })

  const users = useMemo(() => {
    // simulate chat data from users data where every unique number is change isGroup to true
    return usersData?.map(v => ({
      id: v.id.toString(),
      name: `${v.address.suite}-${v.address.street}`,
      lastMessage: {
        content: faker.random.words(5),
        sender: v.username,
      },
      createdAt: faker.date.between('2022-01-01', '2023-01-31'),
      isGroup: true,
    }))
  }, [usersData])

  return (
    <div className="relative flex max-h-[737px] w-full flex-1 flex-col">
      {chatState === '0' ? (
        <ChatCs />
      ) : chatState ? (
        <ChatDetail />
      ) : (
        <>
          <div className="relative p-5 pb-0">
            <input
              placeholder="Search"
              className="inline-flex w-full rounded border-2 border-gray-300 px-2.5 py-0.5 outline-none transition duration-300 ease-in-out focus:border-transparent focus:ring"
            />
            <SearchIcon className="absolute top-[30px] right-7" />
          </div>

          <div className="custom_scroll mt-6 flex min-h-[737px] w-full flex-1 flex-col overflow-y-auto p-5 pb-28 pt-0">
            {isLoading ? (
              <div className="my-auto flex flex-col items-center justify-center">
                <svg className="ring_loading" viewBox="25 25 50 50" strokeWidth="5">
                  <circle cx="50" cy="50" r="20" />
                </svg>
                <span className="mt-2 text-lg font-medium text-gray-700">Loading Chats...</span>
              </div>
            ) : (
              <>
                <Chat
                  createdAt={new Date()}
                  id="0"
                  isGroup={false}
                  lastMessage={{ content: 'Yes' }}
                  name="FastVisa Support"
                />
                {users?.map(v => (
                  <Chat key={v.id} {...v} />
                ))}
              </>
            )}

            <p className={clsxm('mt-4 text-center text-gray-500', isLoading ? 'hidden' : 'block')}>No more data</p>
          </div>
        </>
      )}
    </div>
  )
}

export default ChatList
