const Homeassistant = require('node-homeassistant')
const state = require('./state')
const call = require('./call')

module.exports = (command, program) => (...args) => {
  const log = msg => {
    if (program.verbos) console.log(msg)
  }

  const home = new Homeassistant({
    password: program.apiPassword,
    port: program.port || 8123,
    host: program.ip || '127.0.0.1'
  })
  
  home.on('connection', log)

  if (command === 'call') {
    log('call')
    call(home, log, args)
  }

  if (command === 'state') {
    log('state')
    state(home, log, args)
  }
}
