# watney
how many potatoes!?


query local fda food database and other sources to determine how many of what plant you need to grow to produce x colories by what time


cli
---
```sh
$ watney food potato
lots of potatoes!
```

```
sudo npm install -g watney
```

api
---

```js
var watney = require('watney')
watney.food({search:'potato'},function(err,data){
  console.log(data)
  // lots of potatoes!
})

```
