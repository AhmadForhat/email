require('dotenv').config()
const middy = require('@middy/core')
const jsonBodyParser = require('@middy/http-json-body-parser')
const { preflight } = require('@ziro/middleware')
const { allowedOrigin } = require('@ziro/middleware')
const { auth } = require('@ziro/middleware')
const { errorHandler } = require('@ziro/middleware')
const { cors } = require('@ziro/middleware')
const allowed = null

const lambda = handler =>
    middy(handler)
        .use(preflight)
        .use(allowedOrigin(allowed))
        .use(auth)
        .use(jsonBodyParser())
        .use(errorHandler)
        .use(cors)

module.exports = lambda