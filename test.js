let http = require("http")

let ourApp = http.createServer(function(req, res){
res.end("Hello and welcome to our website")
})
ourApp.listen(3000)
