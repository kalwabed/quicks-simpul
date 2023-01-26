import { Popover } from '@headlessui/react'
import { useState } from 'react'
import { usePopper } from 'react-popper'
import clsxm from '../utils/clsxm'

type ColorScheme = 'purple' | 'yellow' | 'green' | 'white'

export interface ChatMessageProps {
  content: string
  sender?: string
  createdAt: Date
  colorScheme: ColorScheme
}

const COLOR_SCHEME: Record<ColorScheme, { bg: string; text: string }> = {
  purple: {
    bg: 'bg-purple-200',
    text: 'text-purple-700',
  },
  yellow: {
    bg: 'bg-yellow-200',
    text: 'text-yellow-700',
  },
  green: {
    bg: 'bg-green-200',
    text: 'text-green-700',
  },
  white: {
    bg: 'bg-gray-200',
    text: 'text-gray-700',
  },
}

const ChatMessage = (props: ChatMessageProps) => {
  const { content, createdAt, sender, colorScheme = 'purple' } = props
  const [referenceElement, setReferenceElement] = useState()
  const [popperElement, setPopperElement] = useState()
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: sender ? 'bottom-end' : 'bottom-start',
  })

  return (
    <div className={clsxm('flex w-full flex-col gap-1', sender ? 'items-start' : 'items-end')}>
      <span className={`font-medium ${colorScheme === 'white' ? 'text-blue-600' : COLOR_SCHEME[colorScheme].text}`}>
        {sender ?? 'You'}
      </span>
      <div className={`flex items-start gap-1 ${sender ? 'flex-row-reverse' : 'flex-row'}`}>
        <Popover className={`relative ${sender ? 'mr-auto' : 'ml-auto'}`}>
          <Popover.Button
            ref={setReferenceElement as any}
            className="rounded-full px-2 pb-1 outline-none transition hover:bg-gray-100 focus:bg-gray-200"
          >
            ...
          </Popover.Button>

          <Popover.Panel
            ref={setPopperElement as any}
            style={styles.popper}
            className="flex w-32 flex-col items-start rounded-lg border bg-white shadow-lg"
            {...attributes.popper}
          >
            <button className="w-full border-b p-3 text-left text-blue-600 transition hover:bg-blue-50">Edit</button>
            <button className="w-full p-3 text-left text-red-600 transition hover:bg-red-200">Delete</button>
          </Popover.Panel>
        </Popover>
        <div className={`flex w-10/12 flex-col rounded ${COLOR_SCHEME[colorScheme].bg} p-2 text-gray-700`}>
          <p>{content}</p>
          <span className="text-xs text-gray-500">
            {new Intl.DateTimeFormat('id', { timeStyle: 'short' }).format(new Date(createdAt))}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ChatMessage
