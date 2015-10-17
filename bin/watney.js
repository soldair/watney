#!/usr/bin/env node
var argv = require('yargs')
    .usage('Usage: $0 <command> [options]')
    .command('food', 'lookup information about a particular food')
    .demand(2)
    .example('$0 food potato', '')
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2015')
    .argv;

var watney = require('../')

process.on('uncaughtException',function(e){
  logerror(e)
})

var command = argv._[0]
var option = argv._[1]

if(command === "food") {

  watney.food({search:option},function(err,data){
    if(err) logerror(err)
    console.log(data)
  })

} else {
  console.log('i dont know about that yet =(')

} 


function logerror(err){
  console.error('there was an error processing this command.')
  console.error('watney version:\n    ',require('../package.json').version)
  console.error('nodejs version:\n    ',process.version,'on platform',process.platform)
  console.error('with arguments:\n    ',process.argv)

  if(err.network || err.fs) console.error('this error is related to a network or file system action.')
  else if(err.intentional) console.error('watney intentionally gave you this error. this is probably not an error in watney itself.')
  else console.error('this could be an issue with watney itself!')

  console.error(err)

  console.error('if this error continues please open an issue on https://github.com/soldair/watney/issues')
  process.exit(1)
}


function jsonpp(data){
  console.log(JSON.stringify(data,null,'  '))
}

