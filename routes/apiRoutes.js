
// Requiring our  model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the notes
  app.get("/api/notes", function(req, res) {
    db.Note.findAll({})
      .then(function(dbNote) {
        res.json(dbNote);
      });
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
    console.log(req.body);
    db.Note.create({
      noteName: req.body.noteName,
      Content: req.body.Content
    })
      .then(function(dbNote) {
        res.json(dbNote);
      });
  });

  // DELETE route for deleting notes
  app.delete("/api/notes/:id", function(req, res) {
    db.Note.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbNote) {
        res.json(dbNote);
      });
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
 