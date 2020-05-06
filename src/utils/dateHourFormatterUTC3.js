const hourFormat = (hour) => {
    const partsHour = hour.split(':')
    const hourUtc3 = (parseInt(partsHour[0]) + 21) % 24
    return `${hourUtc3 >= 10 ? hourUtc3 : `0${hourUtc3}`}:${partsHour[1]}:${partsHour[2]}`
}

const dateHourFormatterUTC3 = (date) => {
    const utc = date.toUTCString()
    const parts = utc.substr(5).split(' ')
    return `${date.getDate()}/${date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`}/${parts[2]} ${hourFormat(parts[3])}`
}

const dataHourFromatterZoop = data => {
    const [dataSemHora, horario] = data.split('T')
    const [ano, mes, dia] = dataSemHora.split('-')
    const [hora, minuto, segundo] = horario.split('+')[0].split(':')
    const result = new Date(ano, mes - 1, dia, hora, minuto, segundo)
    return result
}


module.exports = { dateHourFormatterUTC3, dataHourFromatterZoop }