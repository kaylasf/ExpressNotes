var express = require("express")
var app = express()

var PORT = process.env.PORT || 8080;


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//  var notesData = require('./data/notes.js')
// app.get("/api/notes", function(req, res) {
//     console.log("inside api routes")
//   res.json(notesData);
// });
require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)


app.listen(PORT, function(){
    
    console.log(`App listening on PORT: ${PORT}`)

})




