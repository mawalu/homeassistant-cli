module.exports = (home, log) => async (options) => {
  if (!options.hadomain || !options.haservice) {
    console.log('Domain and service option are required')
    process.exit(1)
  }

  await home.connect()

  let request = {
    domain: options.hadomain,
    service: options.haservice
  }

  if (options.serviceData) request.service_data = JSON.parse(options.serviceData)

  await home.call(request)
  log('completed')
  
  process.exit(0)
}