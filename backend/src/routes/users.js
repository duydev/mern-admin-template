import { Router } from 'express'
import { userServices } from 'services'
import { requireUser } from 'middlewares/auth'

const router = Router()

router.route('/auth').post(async (req, res, next) => {
  try {
    const { username, password } = req.body
    const token = await userServices.authenticate(username, password)
    return res.json({ token })
  } catch (err) {
    next(err)
  }
})

router.route('/').post(requireUser, async (req, res, next) => {
  try {
    const { fullName, username, password, email } = req.body
    const user = await userServices.add(fullName, username, password, email)
    return res.json(user.toJSON())
  } catch (err) {
    next(err)
  }
})

export default router
