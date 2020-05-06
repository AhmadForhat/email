const test = require('ava')
const assessores2020 = require('./functions/apoio/comissoes/assessores2020')
const lojistica2019 = require('./functions/apoio/comissoes/lojistica2019')

const dataSheets = [
    { ano: 2020, mes: 12, assessor: 'David', valor: 80000, receita: 2000.12 },
    { ano: 2020, mes: 12, assessor: 'David', valor: 40000, receita: 3000.76 },
    { ano: 2020, mes: 12, assessor: 'David', valor: 50000, receita: 2000.56 },
    { ano: 2020, mes: 12, assessor: 'David', valor: 25000, receita: 4000.0 },
    { ano: 2020, mes: 12, assessor: 'João', valor: 36000, receita: 4000.0 }
]

test('Comissão assessor 2020', t => {
    const value = assessores2020(dataSheets,2020,12,'David')
    const arrayObjectCalculated = value
    const arrayObjectExpected = 19500
    t.deepEqual(arrayObjectCalculated, arrayObjectExpected)
})

test('Comissão Lojistica 2019', async t => {
    const value = lojistica2019(dataSheets,2020,12)
    const comissionCalculated = value
    const comissionExpected = 75.0072
    t.is(comissionCalculated, comissionExpected)
})