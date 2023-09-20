import { Document } from 'mongoose'
import User, { UserDocument } from '../models/user.model'

export const createUser = async (input: Document<UserDocument>) => {
  try {
    return await User.create(input)
  } catch(e: any) {
    throw new Error(e)
  }
}
