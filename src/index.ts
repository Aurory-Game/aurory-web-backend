import '@wrappers/dotenv'

import express from 'express'
import routes from '@routes/index'

import { log } from '@utils/log'

const app = express()
app.use(express.json())

app.use('/v1', routes)

const port = process.env.PORT || 8000

app.listen( port, () => {
    log( `server started at http://localhost:${ port }` )
})