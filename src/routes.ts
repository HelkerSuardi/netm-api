import validateResource from './middleware/validateResources'
import { Express, Request, Response } from "express"
import { createUserHandler } from "./controller/user.controller"
import { createUserSchema } from './schema/user.schema'

const router = (app:Express) => {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))

  app.post('/user', validateResource(createUserSchema), createUserHandler)
}

export default router
