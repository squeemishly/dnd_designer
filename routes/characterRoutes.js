const CharactersController = require("../lib/controllers/charactersController");

module.exports = app => {
  app.get("/api/character/races", CharactersController.getAllRaces)
  app.get("/api/character/race/:id", CharactersController.getRace)

  app.get('/api/character/details/:race', CharactersController.getCharacterOptions)

  app.post('/api/character/new', CharactersController.postCharacter)
}
