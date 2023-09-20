import express from "express"
import config from 'config'
import connectDb from './db'
import logger from "./utils/logger"
import router from "./routes"
import swaggerUI from 'swagger-ui-express'
import swaggerOptions from './swagger.json'

const app = express()

app.use(express.json())

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerOptions))

const port = config.get<number>('port')

app.listen(port, async () => { 
  logger.info(`App is running on ${port}`)
  await connectDb()
  router(app)
})