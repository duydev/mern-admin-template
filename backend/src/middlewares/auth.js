import * as hashUtils from 'utils/hash'

export const requireUser = (req, res, next) => {
  try {
    const token = req.headers['x-access-token']
    if (!token) throw Error('Unauthorize')
    const user = hashUtils.verifyToken(token)
    req.user = user
    next()
  } catch (err) {
    next(err)
  }
}
