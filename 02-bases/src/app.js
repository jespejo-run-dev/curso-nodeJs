const {buildLogger} = require('./plugin')

const logger = buildLogger('app.js')
logger.log('Hello world')