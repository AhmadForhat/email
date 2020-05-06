require('dotenv').config()
const middy = require('@middy/core')
const { basicAuth } = require('@ziro/middleware')
const httpJsonBodyParser = require('@middy/http-json-body-parser')
const httpErrorHandler = require('@middy/http-error-handler')
const createError = require('http-errors')
const cors = require('@middy/http-cors')

const main = handler =>
    middy(handler)
        .use(basicAuth)
        .use(httpJsonBodyParser())
        .use(httpErrorHandler())
        .use(cors())

module.exports = main