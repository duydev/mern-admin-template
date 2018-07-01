/* eslint-disable */
import 'db'
import http from 'http'
import app from './app'
import { NODE_ENV } from 'utils/commons'
import chalk from 'chalk'

const PORT = process.env.PORT || 3000

const server = http.createServer(app)
server.listen(PORT)

server.on('listening', () => {
  const port = server.address().port
  console.log(
    chalk.blue(
      `🖥 🌍 Server listening on Port '${port}' with env '${NODE_ENV}'.`
    )
  )
})

server.on('error', err => {
  if (error.syscall !== 'listen') throw error
  switch (error.code) {
    case 'EACCES':
      console.error(chalk.red(`Port '${PORT}' requires elevated privileges.`))
      process.exit(1)
    case 'EADDRINUSE':
      console.error(chalk.red(`Port '${PORT}' is already in use.`))
      process.exit(1)
    default:
      throw error
  }
})

process.on('uncaughtException', err =>
  console.error(chalk.red(`Uncaught Error: ${err.stack}`))
)

process.on('unhandledRejection', err =>
  console.error(chalk.red(`Unhandled Rejection Error: ${err.stack}`))
)
