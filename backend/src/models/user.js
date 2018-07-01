import mongoose from 'mongoose'
import timeStamp from 'mongoose-timestamp'
import { hashPwd } from 'utils/hash'

const schema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
})

schema.set('toJSON', { getters: true, virtuals: false })
schema.set('toObject', { getters: true, virtuals: false })
schema.plugin(timeStamp)

schema.pre('save', async function(next) {
  this.fullName = this.fullName.trim()
  this.username = this.username.trim()
  this.password = await hashPwd(this.password)
  next()
})

export default mongoose.model('User', schema)
