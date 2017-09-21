module.exports = async (home, log, args) => {
  let entity, options
  [entity, options] = args

  await home.connect() 

  const output = msg => console.log(JSON.stringify(msg))

  if(!entity) {
    console.log('Entity option is required')
    process.exit(1)
  }

  if(!options.subscribe) {
    output(home.state(entity))
    process.exit(0)
  }

  home.on(`state:${entity}`, output)
}
