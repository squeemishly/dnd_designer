exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE characters(
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT,
    race_id INTEGER REFERENCES races(id) ON DELETE CASCADE,
    subrace_id INTEGER REFERENCES subraces(id) ON DELETE CASCADE,
    background_id INTEGER REFERENCES backgrounds(id) ON DELETE CASCADE
  )`
  return knex.raw(createQuery)
}

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE characters`
  return knex.raw(dropQuery)
}
