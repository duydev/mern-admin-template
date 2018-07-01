/* eslint-disable */
import mongoose from 'mongoose'
import chalk from 'chalk'

const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/mern-admin'

mongoose
  .connect(MONGO_URI)
  .then(
    () => {
      console.log(chalk.blue(`Connected to MongoDB via '${MONGO_URI}'.`))
    },
    err => {
      console.error(chalk.red(`DB Error: ${err.stack}`))
      process.exit(1)
    }
  )
  .catch(err => {
    console.error(chalk.red(`DB Error: ${err.stack}`))
    process.exit(1)
  })
