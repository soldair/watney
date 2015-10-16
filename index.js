
// watney commands!

module.exports.food = function(data,cb){
  return setImmediate(function(){
    cb(false,'lots of '+(data.search||'potatoes'))
  })
}

