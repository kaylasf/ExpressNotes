
var notesData = require("../data/notes.js");

module.exports = function(app) {


  app.get("/api/notes", function(req, res) {
      console.log("inside api routes")
      console.log(notesData)
    res.json(notesData);
  });

  app.post("/api/notes", function(req, res) {
  //send id through body of request
  console.log(req.body)
  notesData.push(req.body)
  res.json(true);
  });



  app.delete("/api/notes/:id", function(req, res) {
  notesData.pop(req.body)
  res.json(true);
 
});

} 