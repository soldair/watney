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


var command = argv._[0]
var option = argv._[1]

if(command === "food") console.log('alot of '+option)
else {
  console.log('i dont know about that yet =(')

} 
//console.log(argv)


