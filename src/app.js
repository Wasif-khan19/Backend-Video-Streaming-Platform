import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json({ limit: '20kb' }))
app.use(express.urlencoded({ extended: true, limit: '20kb' }))
app.use(express.static('public'))
app.use(cookieParser())

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
))

export { app }
