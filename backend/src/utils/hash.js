import bcrypt from 'bcrypt'

const saltRound = 10

export const hashPwd = text => bcrypt.hash(text, saltRound)

export const checkPwd = (text, hash) => bcrypt.compare(text, hash)
