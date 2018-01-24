exports.up = function(knex, Promise) {
    let createQuery = `CREATE TABLE races(
      id SERIAL PRIMARY KEY NOT NULL,
      name TEXT,
      image TEXT,
      ability_score_increase TEXT,
      max_age INTEGER,
      size TEXT,
      height TEXT,
      avg_weight INTEGER,
      speed INTEGER,
      alignment TEXT,
      dark_vision BOOLEAN DEFAULT FALSE,
      languages TEXT,
      additional_traits TEXT,
      description TEXT,
      created_at TIMESTAMP
    )`
    return knex.raw(createQuery)
  }

  exports.down = function(knex, Promise) {
    let dropQuery = `DROP TABLE races`
    return knex.raw(dropQuery)
  }
