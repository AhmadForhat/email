const axios = require('axios')

const request = async () => {
    const config = {/* add config here */}
    try {
        const { data } = await axios(config)
        return {
            statusCode: 200,
            body: JSON.stringify(data, null, 4)
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            const { status_code, message } = error.response.data.error
            throw createError(status_code, message)
        } else {
            console.log('Unexpected error:', error)
            return {
                statusCode: 500,
                body: JSON.stringify('Internal error. Check logs', null, 4)
            }
        }
    }
}

module.exports = request