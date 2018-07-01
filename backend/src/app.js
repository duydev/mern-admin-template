/* eslint-disable */
import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import chalk from 'chalk'

import rootRouter from 'routes'

const app = express()
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(rootRouter)

app.use('/*', (req, res) => res.status(404).json({ error: 'API not found!' }))

app.use((err, req, res, next) => {
  console.error(chalk.red(`API Error: ${err.stack}`))
  res.status(500).json({ error: err.message })
})

export default app
