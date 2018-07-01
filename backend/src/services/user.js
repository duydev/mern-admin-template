import { User } from 'models'
import * as hashUtils from 'utils/hash'
import { notFoundError, badRequestError } from 'utils/error'

export const add = (fullName, username, password, email) =>
  User.create({ fullName, username, password, email })

export const authenticate = async (username, password) => {
  try {
    const user = await User.findOne({ username }).exec()
    if (!user) throw notFoundError('User not found.')
    if (!(await hashUtils.checkPwd(password, user.password)))
      throw badRequestError('Username or password not matched!')
    const token = await hashUtils.getToken(user.toObject())
    return token
  } catch (err) {
    throw err
  }
}
