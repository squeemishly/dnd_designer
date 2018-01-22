const environment = process.env.NODE_ENV || "development";
const configuration = require("../../../knexfile")[environment];
const database = require("knex")(configuration);

const Character = require("../../../lib/models/Character")


exports.seed = function(knex, Promise) {
  const dwarf = () => {
    const data = { id: null }
    Character.queryRace("Dwarf")
    .then(res => {
      Object.assign(data, data.id, res.id)
    })

    return data
  }
  // const find = (creature) => {
  //   return Character.queryRace(creature)
  //   .then(creature => creature.id)
  // }
  //
  // const dwarf = Promise.resolve(find("Dwarf"))
  console.log(dwarf())

  return knex.raw("TRUNCATE subraces RESTART IDENTITY").then(function() {
    return Promise.all([
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, features, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          1,
          "Hill Dwarf",
          "WIS+1",
          "Dwarven Toughness",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, features, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          1,
          "Mountain Dwarf",
          "STR+2",
          "Dwarven Armor Training",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, features, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          2,
          "High Elf",
          "INT+1",
          "Elven Weapon Training, Cantrip, Extra Language",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, features, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          2,
          "Wood Elf",
          "WIS+1",
          "Elven Weapon Training, Fleet of Foot, Mask of the Wild",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, features, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          2,
          "Drow Elf",
          "CHA+1",
          "Superior Darkvision, Sunlight Sensitivity, Drow Magic, Drow Weapon Training",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, features, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          3,
          "Lightfoot",
          "CHA+1",
          "Naturally Stealthy",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, features, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          3,
          "Stout",
          "CON+1",
          "Stout Resilience",
          new Date()
        ]
      )
    ]);
  });
};
