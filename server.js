import 'dotenv/config.js'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import { router as profilesRouter } from './routes/profiles.js'
import { router as authRouter } from './routes/auth.js'
<<<<<<< HEAD
=======
import { router as loanRouter } from './routes/loans.js'
>>>>>>> 1820d989842f199f0d5b1895869525511e704b51

import('./config/database.js')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/api/profiles', profilesRouter)
app.use('/api/auth', authRouter)
<<<<<<< HEAD
=======
app.use('/api/loans', loanRouter)
>>>>>>> 1820d989842f199f0d5b1895869525511e704b51

app.use(function (req, res, next) {
  res.status(404).json({ err: "Not found" })
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

export { app }
