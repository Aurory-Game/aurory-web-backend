import '@wrappers/dotenv'
import 'newrelic'

import express from 'express'
import cors from 'cors'
import routes from '@routes/index'

import { log } from '@utils/log'

const app = express()
app.use(cors({
    origin: 'aurory.io'
}))
app.use(express.json())

app.use('/v1', routes)

const port = process.env.PORT || 8000

app.listen( port, () => {
    log( `server started at http://localhost:${ port }` )
})
