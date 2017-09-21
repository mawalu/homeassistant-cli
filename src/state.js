module.exports = async (home, log, args) => {
  let entity = args[0]
  let options = args[1]

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
