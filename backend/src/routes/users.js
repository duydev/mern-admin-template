import { Router } from 'express'
import { userServices } from 'services'

const router = Router()

router.route('/').post(async (req, res, next) => {
  try {
    const { fullName, username, password, email } = req.body
    const doc = await userServices.add(fullName, username, password, email)
    return res.json(doc.toJSON())
  } catch (err) {
    next(err)
  }
})

export default router
