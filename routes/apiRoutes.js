
// Requiring our  model
// var db = require("../models");

var notesData = require("../data/notes.js");


// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the notes
  app.get("/api/notes", function(req, res) {
    // db.Note.findAll({})
    //   .then(function(dbNote) {
    //     res.json(dbNote);
    //   });

    console.log("inside api routes")
    console.log(notesData)
  res.json(notesData);
  });



  // // Get route for retrieving a single post
  // app.get("/api/notes/:id", function(req, res) {
  //   db.Post.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });

  // POST route for saving a new post
  app.post("/api/notes", function(req, res) {
    // console.log(req.body);
    // db.Note.create({
    //   noteName: req.body.noteName,
    //   Content: req.body.Content
    // })
    //   .then(function(dbNote) {
    //     res.json(dbNote);
    //   });
    //send id through body of request
  console.log(req.body)
  notesData.push(req.body)
  res.json(true);
  });

  // DELETE route for deleting notes
  app.delete("/api/notes/:id", function(req, res) {
    // db.Note.destroy({
    //   where: {
    //     id: req.params.id
    //   }
    // })
    //   .then(function(dbNote) {
    //     res.json(dbNote);
    //   });
    notesData.pop(req.body)
  res.json(true);
  });

  // PUT route for updating notes
  // app.put("/api/notes", function(req, res) {
  //   db.Post.update(req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });
};
 