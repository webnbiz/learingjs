let express = require("expess")
let ourApp = express()
ourApp.get('/', function(req, res){

 res.send(`
 <form>
//  <p>What color?</p>
 <input name="skyColor" autocomplete="off"></input>
 <button></button>
 </form>
 
 `)

})

ourApp.listen(3000)

