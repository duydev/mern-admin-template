import axios from 'axios'

const config = {
  baseURL: process.env.API_URI || 'http://localhost:4000',
  timeout: 3000
}

export const get = async path => {
  try {
    const response = await axios({
      ...config,
      path
    })
    return response.data
  } catch (err) {
    throw err
  }
}
