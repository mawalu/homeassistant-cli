module.exports = home => async (options) => {
  await home.connect() 

  const output = msg => console.log(JSON.stringify(msg))

  if(!options.entity) {
    console.log('Entity option is required')
    process.exit(1)
  }

  if(!options.subscribe) {
    output(home.state(options.entity))
    process.exit(0)
  }

  home.on(`state:${options.entity}`, output)
}