import express from 'express'
import createError from 'http-errors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import routerIndex from './router/index'

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/', routerIndex)
app.use('/api', (req, res, next) => {
  next(createError(404))
})
app.use((err, req, res, next) => {
  res.json({
    success: false,
    message: err?.message || 'Unknown Error.',
  })
})

export default app
