class HttpError extends Error {
  constructor(httpCode = 500, ...params) {
    super(...params)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError)
    }
    this.httpCode = httpCode
  }
}

export const badRequestError = message => new HttpError(400, message)
export const unauthorizedError = message => new HttpError(401, message)
export const forbiddenError = message => new HttpError(403, message)
export const notFoundError = message => new HttpError(404, message)
export const serverError = message => new HttpError(500, message)

export default HttpError
