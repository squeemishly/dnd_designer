exports.up = function(knex, Promise) {
    let createQuery = `CREATE TABLE subraces(
      id SERIAL PRIMARY KEY NOT NULL,
      race_id INTEGER REFERENCES races(id) ON DELETE CASCADE,
      name TEXT,
      ability_score_increase TEXT,
      traits TEXT,
      created_at TIMESTAMP
    )`
    return knex.raw(createQuery)
  }

  exports.down = function(knex, Promise) {
    let dropQuery = `DROP TABLE subraces`
    return knex.raw(dropQuery)
  }
