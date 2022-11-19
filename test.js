let express = require("express")
let ourApp = express()
ourApp.get('/', function(req, res){

 res.send(`

 <form action="/answer" method="POST">
 <p>What colorrrr?</p>
 <input name="skyColor" autocomplete="off"></input>
 <button>Submit answer</button>
 </form>
 
 `)

 ourApp.post('/answer', function(req, res){
    res.send("thank you")
 })

 ourApp.get('/answer', function(req, res){
    res.send("Lost")
 })

})

ourApp.listen(3000)

