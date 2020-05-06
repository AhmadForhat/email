const { dateHourFormatterUTC3 } = require('../utils/dateHourFormatterUTC3')
const nodemailer = require('nodemailer')

const enviarEmail = ( body ) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: body.userEmail,
            pass: body.pwdEmail
        }
    })
    // Options para mandar o e-mail
    const diaDeHoje = dateHourFormatterUTC3(new Date())
    const mailOptions = {
        from: body.userEmail,
        to: body.email,
        subject: `${body.titulo} ${diaDeHoje}`,
        html: body.html
    }
    return new Promise((resolve,reject)=>{
        transporter.sendMail(mailOptions, function(err,data){
            if(err){
                if(err.response){
                    reject(err.response)
                }else if(err.code === 'ESOCKET'){
                    reject(err.code)
                    console.log(err.code, 'Erro ao conectar ao servidor, verifique se os parâmetros no options estão corretos')
                }
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

module.exports = enviarEmail