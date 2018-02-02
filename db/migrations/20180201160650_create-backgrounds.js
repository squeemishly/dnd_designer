exports.up = function(knex, Promise) {
    let createQuery = `CREATE TABLE backgrounds(
      id SERIAL PRIMARY KEY NOT NULL,
      name TEXT,
      skill_proficiencies TEXT,
      languages TEXT,
      tool_proficiencies TEXT,
      equipment TEXT,
      feature TEXT,
      description TEXT,
      created_at TIMESTAMP
    )`
    return knex.raw(createQuery)
  }

  exports.down = function(knex, Promise) {
    let dropQuery = `DROP TABLE backgrounds`
    return knex.raw(dropQuery)
  }
