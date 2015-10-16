var test = require('tape')
var watney = require('../')

test("can food",function(t){
  watney.food({search:'potato'},function(err,data){
    // doesnt do anything yet
    t.ok(data,'should have response')
    t.end()
  })
})
