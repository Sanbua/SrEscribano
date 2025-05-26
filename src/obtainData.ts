import type { Game } from './types/timesDay.type'
import { bot } from './bot'
import { getDay, getMonthName, getToday } from './calcDate'
import { sheets, spreadsheetId } from './conGoogle'
import { gameInfo } from './util/gameInfo'
import { months } from './util/months'
import { timesDay } from './util/timesDay'
import { users } from './util/users'

export async function getData(gameActual: any, userActual: any, timeGame: string) {
  const positionUser = userActual.position[gameActual?.name]
  const range = `${months[getMonthName()]}!${positionUser}${getDay()}`

  resetTimesDay()

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[timeGame]],
    },
  })

  const game = timesDay.users[userActual.username] as Game
  game[gameActual?.name as keyof Game] = timeGame

  checkCompleted()
}

export function resetTimesDay(): void {
  if (timesDay.today !== getToday()) {
    timesDay.today = getToday()
    // Reiniciar los tiempos del día de todos los usuarios
    users.forEach((user) => {
      timesDay.users[user.username] = { Queens: '', Tango: '', Zip: '' }
    })
  }
}

export function checkCompleted(): void {
  const completed = Object.values(timesDay.users).every(user =>
    Object.values(user).every(value => value.trim() !== ''),
  )

  if (completed) {
    msgComplete()
  }
}

export function msgComplete(): void {
  let message = `✅ ¡Ya tengo todos los tiempos! 🎉\n\n`

  gameInfo.forEach((game) => {
    message += `En el ${game.nameDecorated},\n`
    users.forEach((user) => {
      const value = timesDay.users[user.username]?.[game.name]
      message += ` ${user.firstName}: ${value ?? '(sin datos)'}\n`
      // message += ` ${user.firstName}: ${timesDay.users[user.username][game.name]}\n`
    })
    message += `\n`
  })

  users.forEach((user) => {
    bot.api.sendMessage({ chat_id: user.id, text: message })
  })
}
