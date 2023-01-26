export const isGroup = (id: number): boolean => {
  return id % 2 === 0
}

export const groupName = (suite: string, street: string): string => {
  return `${suite}-${street}`
}
