import mongoose from "mongoose"
import bcrypt from 'bcrypt'
import config from 'config'

export interface UserDocument extends mongoose.Document {
  email: string
  name: string
  password: string,
  comparePassword(password: string): Promise<Boolean>
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    const saltFactor = config.get<number>('saltWorkFactor')
    const salt = await bcrypt.genSalt(saltFactor)
    this.password = await bcrypt.hashSync(this.password, salt)
  }
})

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password).catch(e => false)
}

const User = mongoose.model('User', userSchema)

export default User