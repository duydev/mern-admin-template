import { User } from 'models'

export const add = (fullName, username, password, email) =>
  User.create({ fullName, username, password, email })
