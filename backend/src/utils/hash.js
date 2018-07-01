import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const saltRound = 10

export const hashPwd = text => bcrypt.hash(text, saltRound)

export const checkPwd = (text, hash) => bcrypt.compare(text, hash)

const algorithm = 'HS256'
const expiresIn = '2 days'
const APP_KEY = process.env.APP_KEY

export const getToken = data =>
  new Promise((resolve, reject) => {
    jwt.sign(data, APP_KEY, { algorithm, expiresIn }, (err, token) => {
      if (err) reject(err)
      resolve(token)
    })
  })

export const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, APP_KEY, { algorithms: [algorithm] }, (err, decoded) => {
      if (err) reject(err)
      resolve(decoded)
    })
  })
