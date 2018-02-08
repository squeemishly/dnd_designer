exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE character_classes(
    id SERIAL PRIMARY KEY NOT NULL,
    character_id INTEGER REFERENCES characters(id) ON DELETE CASCADE,
    class_id INTEGER REFERENCES classes(id) ON DELETE CASCADE,
    level INTEGER,
    created_at TIMESTAMP
  )`
  return knex.raw(createQuery)
}

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE character_classes`
  return knex.raw(dropQuery)
}
