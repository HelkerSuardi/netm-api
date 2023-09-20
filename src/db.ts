import mongoose from 'mongoose'
import config from 'config'
import logger from './utils/logger'

const connectDb = async () => {
  const dbUri = config.get<string>('dbUri')

  try {
    await mongoose.connect(dbUri)
    logger.info('DB connected successfully')
  } catch (e) {
    logger.error('Failed to connect DB')
    process.exit(1)
  }
}

export default connectDb
