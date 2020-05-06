const main = require('../templates/main')
const enviarEmail = require('../utils/enviarEmail')
require('dotenv').config()

const sendEmail = async ({ body:corpo }) => {
    try {
        console.log(corpo)
        await enviarEmail(corpo)
        return {
            statusCode: 200,
            body: JSON.stringify(`Email enviado com sucesso para o ${corpo.email}`)
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify('Erro no envio para o email')
        }
    }
}

module.exports = { handler: main(sendEmail) }