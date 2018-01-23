const environment = process.env.NODE_ENV || "development";
const configuration = require("../../../knexfile")[environment];
const database = require("knex")(configuration);

const Character = require("../../../lib/models/Character");

const find = async (race) =>
  await Character.queryRace(race).then(r => r.id);

exports.seed = async function(knex, Promise) {
  return Promise.all([
    knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, features, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await find("Dwarf"),
          "Hill Dwarf",
          "WIS+1",
          "Dwarven Toughness",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, features, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await find("Dwarf"),
          "Mountain Dwarf",
          "STR+2",
          "Dwarven Armor Training",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, features, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await find("Elf"),
          "High Elf",
          "INT+1",
          "Elven Weapon Training, Cantrip, Extra Language",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, features, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await find("Elf"),
          "Wood Elf",
          "WIS+1",
          "Elven Weapon Training, Fleet of Foot, Mask of the Wild",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, features, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await find("Elf"),
          "Drow Elf",
          "CHA+1",
          "Superior Darkvision, Sunlight Sensitivity, Drow Magic, Drow Weapon Training",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, features, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await find("Halfling"),
          "Lightfoot",
          "CHA+1",
          "Naturally Stealthy",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, features, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await find("Halfling"),
          "Stout",
          "CON+1",
          "Stout Resilience",
          new Date()
        ]
      )
  ]);
}
