const environment = process.env.NODE_ENV || "development";
const configuration = require("../../knexfile")[environment];
const database = require("knex")(configuration);

const queryRace = name => {
  return database
    .raw(`SELECT * FROM RACES WHERE NAME = ? `, [name])
    .then(function(response) {
      return response.rows[0];
    });
};

module.exports = {
  queryRace: queryRace
};
