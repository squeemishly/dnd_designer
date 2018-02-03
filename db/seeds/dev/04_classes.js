exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE TABLE classes").then(function() {
    return Promise.all([
      knex.raw(
        "INSERT INTO classes (name, hit_dice, hp_at_first_level, hp_at_higher_levels, armor_proficiencies, weapon_proficiencies, tool_proficiencies, saving_throws, skill_proficiencies, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Barbarian",
          "1d12 per barbarian level",
          "12 + CON modifier",
          "1d12 (or 7) + CON modifier",
          "Light armor, medium armor, shields",
          "Simple weapons, martial weapons",
          "",
          "STR CON",
          "Choose 2: Animal Handling, Athletics, Intimidation, Nature, Perception, Survival",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO classes (name, hit_dice, hp_at_first_level, hp_at_higher_levels, armor_proficiencies, weapon_proficiencies, tool_proficiencies, saving_throws, skill_proficiencies, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Bard",
          "1d8 per bard level",
          "8 + CON modifier",
          "1d8 (or 5) + CON modifier",
          "Light armor",
          "Simple weapons, hand crossbows, longswords, rapiers, shortswords",
          "Three musical instruments of your choice",
          "DEX, CHA",
          "Choose any 3",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO classes (name, hit_dice, hp_at_first_level, hp_at_higher_levels, armor_proficiencies, weapon_proficiencies, tool_proficiencies, saving_throws, skill_proficiencies, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Cleric",
          "1d8 per cleric level",
          "8 + CON modifier",
          "1d8 (or 5) + CON modifier",
          "Light armor, medium armor, shields",
          "All simple weapons",
          "",
          "WIS, CHA",
          "Choose 2: History, Insight, Medicine, Persuasion, Religion",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO classes (name, hit_dice, hp_at_first_level, hp_at_higher_levels, armor_proficiencies, weapon_proficiencies, tool_proficiencies, saving_throws, skill_proficiencies, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Druid",
          "1d8 per druid level",
          "8 + CON modifier",
          "1d8 (or 5) + CON modifier",
          "Light armor, medium armor, shields (druids will not use metal armor or sheilds)",
          "Clubs, daggers, darts, javelins, maces, quaterstaffs, scimitars, sickles, slings, spears",
          "Herbalism kit",
          "INT, WIS",
          "Choose 2: Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, Survival",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO classes (name, hit_dice, hp_at_first_level, hp_at_higher_levels, armor_proficiencies, weapon_proficiencies, tool_proficiencies, saving_throws, skill_proficiencies, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Fighter",
          "1d10 per fighter level",
          "10 + CON modifier",
          "1d10 (or 6) + CON modifier",
          "All armor, shields",
          "Simple weapons, martial weapons",
          "",
          "STR, CON",
          "Choose 2: Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, Survival",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO classes (name, hit_dice, hp_at_first_level, hp_at_higher_levels, armor_proficiencies, weapon_proficiencies, tool_proficiencies, saving_throws, skill_proficiencies, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Monk",
          "1d8 per monk level",
          "8 + CON modifier",
          "1d8 (or 5) + CON modifier",
          "",
          "Simple weapons, shortswords",
          "One type of artisan's tools or one musical instrument",
          "STR, DEX",
          "Choose 2: Acrobatics, Athletics, History, Insight, Religion, Stealth",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO classes (name, hit_dice, hp_at_first_level, hp_at_higher_levels, armor_proficiencies, weapon_proficiencies, tool_proficiencies, saving_throws, skill_proficiencies, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Paladin",
          "1d10 per paladin level",
          "10 + CON modifier",
          "1d10 (or 6) + CON modifier",
          "All armor, shields",
          "Simple weapons, martial weapons",
          "",
          "WIS, CHA",
          "Choose 2: Athletics, Insight, Intimidation, Medicine, Persuasion, Religion",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO classes (name, hit_dice, hp_at_first_level, hp_at_higher_levels, armor_proficiencies, weapon_proficiencies, tool_proficiencies, saving_throws, skill_proficiencies, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Ranger",
          "1d10 per ranger level",
          "10 + CON modifier",
          "1d10 (or 6) + CON modifier",
          "Light armor, medium armor, sheilds",
          "Simple weapons, martial weapons",
          "",
          "STR, DEX",
          "Choose 3: Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, Survival",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO classes (name, hit_dice, hp_at_first_level, hp_at_higher_levels, armor_proficiencies, weapon_proficiencies, tool_proficiencies, saving_throws, skill_proficiencies, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Rogue",
          "1d8 per rogue level",
          "8 + CON modifier",
          "1d8 (or 5) + CON modifier",
          "Light armor",
          "Simple weapons, hand crossbows, longswords, rapiers, shortswords",
          "Thieves' tools",
          "DEX, INT",
          "Choose 4: Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, Stealth",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO classes (name, hit_dice, hp_at_first_level, hp_at_higher_levels, armor_proficiencies, weapon_proficiencies, tool_proficiencies, saving_throws, skill_proficiencies, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Sorcerer",
          "1d6 per sorcerer level",
          "6 + CON modifier",
          "1d6 (or 4) + CON modifier",
          "",
          "Daggers, darts, slings, quarterstaffs, light crossbows",
          "",
          "CON, CHA",
          "Choose 2: Arcana, Deception, Insight, Intimidation, Persuasion, Religion",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO classes (name, hit_dice, hp_at_first_level, hp_at_higher_levels, armor_proficiencies, weapon_proficiencies, tool_proficiencies, saving_throws, skill_proficiencies, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Warlock",
          "1d8 per warlock level",
          "8 + CON modifier",
          "1d8 (or 5) + CON modifier",
          "Light armor",
          "Simple weapons",
          "",
          "WIS, CHA",
          "Choose 2: Arcana, Deception, History, Intimidation, Investigation, Nature, Religion",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO classes (name, hit_dice, hp_at_first_level, hp_at_higher_levels, armor_proficiencies, weapon_proficiencies, tool_proficiencies, saving_throws, skill_proficiencies, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Wizard",
          "1d6 per wizard level",
          "6 + CON modifier",
          "1d6 (or 4) + CON modifier",
          "",
          "Daggers, darts, slings, quarterstaffs, light crossbows",
          "",
          "INT, WIS",
          "Choose 2: Arcana, History, Insight, Investigation, Medicine, Religion",
          "",
          new Date()
        ]
      )
    ]);
  });
};
