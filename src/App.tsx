import { Popover, Transition } from '@headlessui/react'

import Container from './components/container'
import LightningIcon from './assets/lightning.svg'
import MessagingIcon from './assets/messaging.svg'
import TaskIcon from './assets/todo.svg'
import clsxm from './utils/clsxm'
import ChatList from './components/chat-list'
import { useAtom } from 'jotai'
import { isShowInboxState, isShowMenuState, isShowTaskState } from './store/popover-state'

export default function App() {
  const [isShowingMenu, setIsShowingMenu] = useAtom(isShowMenuState)
  const [isShowInbox, setIsShowInbox] = useAtom(isShowInboxState)
  const [isShowTask, setIsShowTask] = useAtom(isShowTaskState)

  return (
    <Container>
      <div className="absolute bottom-0 right-0 m-6">
        <div className="relative flex gap-5">
          <Transition
            show={isShowingMenu}
            className={clsxm(
              'relative z-50 flex',
              isShowTask ? 'flex-row-reverse' : 'flex-row',
              isShowInbox || isShowTask ? '' : 'gap-5'
            )}
          >
            <Transition.Child
              enter="transition ease-in-out duration-500 transform"
              enterFrom="translate-x-full opacity-0"
              enterTo="-translate-x-0 opacity-100"
              leave="transition ease-in-out duration-100 transform"
              leaveFrom="-translate-x-0 opacity-100"
              leaveTo="translate-x-full opacity-0"
              className={clsxm('relative flex flex-col', isShowInbox ? 'z-30' : 'z-10')}
            >
              <Popover className={clsxm('relative', isShowInbox ? 'mr-6 translate-x-full transform' : '')}>
                {({ open }) => {
                  if (open) {
                    setIsShowTask(true)
                  } else {
                    setIsShowTask(false)
                  }

                  return (
                    <>
                      <span
                        className={clsxm(
                          'absolute -top-8 left-3 transform font-bold text-[#F2F2F2] transition duration-[500ms] ease-in-out ui-open:-translate-y-full',
                          isShowInbox || isShowTask ? 'translate-y-full opacity-0' : ''
                        )}
                      >
                        Task
                      </span>
                      <Popover.Button
                        className={clsxm(
                          'rounded-full bg-[#F2F2F2] p-4 transition duration-300 hover:bg-gray-300',
                          isShowTask ? 'translate-x-full transform bg-[#F8B76B] text-white' : ''
                        )}
                      >
                        <TaskIcon className="h-8 w-8" fill={isShowTask ? '#fff' : '#F8B76B'} />
                      </Popover.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Popover.Panel className="absolute -right-16 bottom-24 z-20 min-w-[734px] rounded-lg bg-white p-5 shadow-md">
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, excepturi voluptates
                            ea quisquam rerum quas!
                          </p>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )
                }}
              </Popover>
            </Transition.Child>
            <Transition.Child
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full opacity-0"
              enterTo="-translate-x-0 opacity-100"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="-translate-x-0 opacity-100"
              leaveTo="translate-x-full opacity-0"
              className={clsxm('relative flex flex-col', isShowTask ? 'z-30' : 'z-10')}
            >
              <Popover className={clsxm('relative', isShowTask ? 'mr-6 translate-x-full transform' : '')}>
                {({ open }) => {
                  if (open) {
                    setIsShowInbox(true)
                  } else {
                    setIsShowInbox(false)
                  }

                  return (
                    <>
                      <span
                        className={clsxm(
                          'absolute -top-8 left-2 transform font-bold text-[#F2F2F2] transition duration-[550ms] ease-in-out ui-open:-translate-y-full',
                          isShowInbox || isShowTask ? 'translate-y-full opacity-0' : ''
                        )}
                      >
                        Inbox
                      </span>
                      <Popover.Button
                        className={clsxm(
                          'rounded-full bg-[#F2F2F2] p-4 transition duration-300 hover:bg-gray-300',
                          isShowInbox ? 'translate-x-full transform bg-[#8785FF] text-white' : ''
                        )}
                      >
                        <MessagingIcon className="h-8 w-8 text-blue-500" fill={isShowInbox ? '#fff' : '#8885FF'} />
                      </Popover.Button>

                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Popover.Panel className="absolute -right-16 bottom-24 z-20 min-w-[734px] overflow-hidden rounded bg-white shadow-md">
                          <ChatList />
                        </Popover.Panel>
                      </Transition>
                    </>
                  )
                }}
              </Popover>
            </Transition.Child>
          </Transition>

          <button
            className={clsxm(
              'rounded-full bg-[#2F80ED] p-4 transition duration-300 focus:bg-blue-600',
              isShowingMenu && (isShowInbox || isShowTask) ? '-translate-x-9 transform bg-[#4F4F4F]' : ''
            )}
            onClick={() => setIsShowingMenu(prev => !prev)}
          >
            <LightningIcon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </Container>
  )
}
