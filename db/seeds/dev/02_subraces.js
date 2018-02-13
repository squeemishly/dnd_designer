const environment = process.env.NODE_ENV || "development";
const configuration = require("../../../knexfile")[environment];
const database = require("knex")(configuration);

const Character = require("../../../lib/models/Character");

const race_id = async (race) =>
  await Character.queryRaceByName(race).then(r => r.id);

exports.seed = async function(knex, Promise) {
  return Promise.all([
    knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Dwarf"),
          "Hill Dwarf",
          "WIS +1",
          "Dwarven Toughness",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Dwarf"),
          "Mountain Dwarf",
          "STR +2",
          "Dwarven Armor Training",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Elf"),
          "High Elf",
          "INT +1",
          "Elven Weapon Training, Cantrip, Extra Language",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Elf"),
          "Wood Elf",
          "WIS +1",
          "Elven Weapon Training, Fleet of Foot, Mask of the Wild",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Elf"),
          "Drow Elf",
          "CHA +1",
          "Superior Darkvision, Sunlight Sensitivity, Drow Magic, Drow Weapon Training",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Halfling"),
          "Lightfoot",
          "CHA +1",
          "Naturally Stealthy",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Halfling"),
          "Stout",
          "CON +1",
          "Stout Resilience",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Gnome"),
          "Forest Gnome",
          "DEX +1",
          "Natural Illusionist, Speak with Small Beasts",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Gnome"),
          "Rock Gnome",
          "CON +1",
          "Artificer's Lore, Tinker",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Dragonborn"),
          "Black Draconic Ancestry",
          "None",
          "Acid Breath Weapon: 5 x 30 ft. line (DEX save)",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Dragonborn"),
          "Blue Draconic Ancestry",
          "None",
          "Lightning Breath Weapon: 5 x 30 ft. line (DEX save)",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Dragonborn"),
          "Brass Draconic Ancestry",
          "None",
          "Fire Breath Weapon: 5 x 30 ft. line (DEX save)",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Dragonborn"),
          "Bronze Draconic Ancestry",
          "None",
          "Lightning Breath Weapon: 5 x 30 ft. line (DEX save)",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Dragonborn"),
          "Copper Draconic Ancestry",
          "None",
          "Acid Breath Weapon: 5 x 30 ft. line (DEX save)",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Dragonborn"),
          "Gold Draconic Ancestry",
          "None",
          "Fire Breath Weapon: 15 ft. cone (DEX save)",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Dragonborn"),
          "Green Draconic Ancestry",
          "None",
          "Poison Breath Weapon: 15 ft. cone (CON save)",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Dragonborn"),
          "Red Draconic Ancestry",
          "None",
          "Fire Breath Weapon: 15 ft. cone (DEX save)",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Dragonborn"),
          "Silver Draconic Ancestry",
          "None",
          "Cold Breath Weapon: 15 ft. cone (CON save)",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Dragonborn"),
          "White Draconic Ancestry",
          "None",
          "Cold Breath Weapon: 15 ft. cone (CON save)",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Half Orc"),
          "",
          "",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Tiefling"),
          "",
          "",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Human"),
          "",
          "",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO subraces (race_id, name, ability_score_increase, traits, created_at) VALUES (?, ?, ?, ?, ?)",
        [
          await race_id("Half Elf"),
          "",
          "",
          "",
          new Date()
        ]
      )
  ]);
}
