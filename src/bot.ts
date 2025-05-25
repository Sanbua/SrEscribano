import { Bot } from 'gramio'
import { hour, today } from './calcDate.ts'
import { config } from './config.ts'
import { getData } from './obtainData.ts'
import { gameInfo } from './util/gameInfo.ts'
import { regexTime } from './util/regex.ts'
import { users } from './util/users.ts'

export const bot = new Bot(config.BOT_TOKEN).onStart(({ info }) =>
  console.log(`✨ Bot ${info.username} was started! ${today}`),
)

bot.on('message', async (context) => {
  // log
  console.log(`
    Mensaje de ${context.from.username} [${context.from.id}]: ${today} ${hour}  
    ${context.text}
    `)

  const userActual = users.find(user => context.from.username === user.username)

  if (userActual !== undefined) {
    const gameActual = gameInfo.find(game => context.text?.startsWith(game.text))

    if (gameActual !== undefined) {
      const timeGame = context.text?.match(regexTime)?.[0] || '-:--'
      getData(gameActual, userActual, timeGame)
      await context.send(`Vale ${context.from.firstName}, el ${gameActual?.name} del día ${today} esta apuntado con un tiempo de ${timeGame}`)
    } else if (context.text?.toLowerCase().includes('moa')) {
      await context.send('MOA 😊')
    } else {
      await context.sendAnimation('https://c.tenor.com/PQjmqBZ7TVoAAAAd/tenor.gif', {
        caption: 'Esto no es un juego 😡',
      })
    }
  }
})
