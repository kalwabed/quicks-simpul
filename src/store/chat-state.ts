import { atomWithHash } from 'jotai-location'

export const chatAtom = atomWithHash<string>('chat', '')
