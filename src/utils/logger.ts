import logger from 'pino'
import dayJs from 'dayjs'

export default logger({
  transport: {
    target: 'pino-pretty'
  },
  base: {
    pid: false
  },
  timestamp: () => `,"time":"${dayJs().format()}"`
})