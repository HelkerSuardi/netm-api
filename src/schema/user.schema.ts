import { object, string, TypeOf } from 'zod'

export const createUserSchema = object({
  body: object({
    name: string({ required_error: 'Name is required' }),
    email: string({ required_error: 'Name is required' }).email('Not a valid email'),
    password: string({ required_error: 'Name is required' }).min(6, 'Password is too short - should be 6 chars minimum')
  })
})

export type CreateUserInput = TypeOf<typeof createUserSchema>