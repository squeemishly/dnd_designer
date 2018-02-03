const CharactersController = require("../lib/controllers/charactersController");

module.exports = app => {
  app.get("/api/character/race/:name", CharactersController.getRace)
  // app.get("/api/character/subrace/:race", CharactersController.getSubRace)

  app.get('/api/character/details/:race', CharactersController.getRaceDetails)

  app.post('/api/character/new', CharactersController.postCharacter)
}
