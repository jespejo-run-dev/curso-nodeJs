const {getAge} = require('../plugin/get-age.plugin.js')
const {getUUID} = require('../plugin/get-id.plugin.js')

const {http} = require('../plugin/http-client.js')

module.exports = {
    getUUID,
    getAge,
    http
}