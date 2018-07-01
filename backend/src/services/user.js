import { User } from 'models'
import * as hashUtils from 'utils/hash'

export const add = (fullName, username, password, email) =>
  User.create({ fullName, username, password, email })

export const authenticate = async (username, password) => {
  try {
    const user = await User.findOne({ username }).exec()
    if (!user) throw Error('User not found.')
    if (!(await hashUtils.checkPwd(password, user.password)))
      throw Error('Username or password not matched!')
    const token = hashUtils.getToken(user.toObject())
    return token
  } catch (err) {
    throw err
  }
}
