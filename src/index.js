const cervezas = require('./cervezas.json')
const uniqueRandomArray = require('unique-random-array')

module.exports = {
  todas: cervezas,
  preferida: 'ambar que es de casa',
  alazar: uniqueRandomArray(cervezas)
}
