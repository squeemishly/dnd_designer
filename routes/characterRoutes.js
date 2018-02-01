const CharactersController = require("../lib/controllers/charactersController");

module.exports = app => {
  app.get("/api/character/race/:name", CharactersController.getRace)

  app.post('/api/character/new', CharactersController.postCharacter)
}

