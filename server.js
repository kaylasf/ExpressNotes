const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080;

app.use(express.urlencooded({ extended: true }))
app.use(express.json())

require('./routes/apiRoutes')(app)
require('./routes/apiRoutes')(app)

app.listen(PORT, function(){
    console.log(`App listening on PORT: ${PORT}`)
})