const date = new Date()
export const hour = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
export const today: string = date.toLocaleDateString()
export const getMonth: number = date.getMonth() + 1
const getDay = date.getDate()
export const cellDay: number = getDay + 2
