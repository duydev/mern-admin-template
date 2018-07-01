import * as hashUtils from 'utils/hash'
import { unauthorizedError } from 'utils/error'

export const requireUser = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token']
    if (!token) throw unauthorizedError('Unauthorized')
    const user = await hashUtils.verifyToken(token)
    req.user = user
    next()
  } catch (err) {
    if (err.name === 'TokenExpiredError')
      return next(unauthorizedError('Token Expired'))
    if (err.name === 'JsonWebTokenError')
      return next(unauthorizedError('Token Error'))
    next(err)
  }
}
