exports.up = function(knex, Promise) {
    let createQuery = `CREATE TABLE classes(
      id SERIAL PRIMARY KEY NOT NULL,
      name TEXT,
      hit_dice TEXT,
      hp_at_first_level TEXT,
      hp_at_higher_levels TEXT,
      armor_proficiencies TEXT,
      weapon_proficiencies TEXT,
      tool_proficiencies TEXT,
      saving_throws TEXT,
      skill_proficiencies TEXT,
      description TEXT,
      created_at TIMESTAMP
    )`
    return knex.raw(createQuery)
  }

  exports.down = function(knex, Promise) {
    let dropQuery = `DROP TABLE classes`
    return knex.raw(dropQuery)
  }
