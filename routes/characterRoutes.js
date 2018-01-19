const environment = process.env.NODE_ENV || "development";
const configuration = require("../knexfile")[environment];
const database = require("knex")(configuration);

const CharactersController = require("../lib/controllers/charactersController");

module.exports = app => {
  app.get("/api/character/race/:name", CharactersController.getRace)
}

