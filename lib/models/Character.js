const environment = process.env.NODE_ENV || "development";
const configuration = require("../../knexfile")[environment];
const database = require("knex")(configuration);

class Character {
  static queryRace(name) {
    return database
    .raw(`SELECT * FROM races WHERE name = ? `, [name])
    .then(response => {
      return response.rows[0];
    });
  };

  static querySubRace(race) {
    return database
    .raw(`
      SELECT subraces.name FROM subraces
      INNER JOIN races ON subraces.race_id = races.id
      WHERE races.name = ?`, [race])
    .then(response => {
      return response.rows
    })
  }
}

module.exports = Character;
