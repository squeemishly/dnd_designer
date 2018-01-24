exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE TABLE races, subraces CASCADE").then(function() {
    return Promise.all([
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, languages, additional_race_features, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Dwarf",
          "http://media.wizards.com/images/dnd/newtodnd/NEW_TO_DD_Races_Dwarf.png",
          "CON +2",
          400,
          "Medium",
          "4 - 5 ft",
          150,
          25,
          "Lawful",
          true,
          "Common, Dwarvish",
          "Dwarven Resilience, Dwarven Combat Training, Tool Proficiency, Stonecunning, Subrace",
          "Dwarves are short and solidly built. They live mostly in hills and mountains to be close to the stone they love. They tend to be cunning craftsmen of stone and metal.\
          \
          Because dwarves are a long lived race, they tend to view time differently than humans.\
          \
          Clans",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, languages, additional_race_features, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Elf",
          "https://vignette.wikia.nocookie.net/dmc-dd/images/d/de/Sun_elf.jpg/revision/latest/scale-to-width-down/252?cb=20160110165058",
          "DEX +2",
          750,
          "Medium",
          "5 - 6 ft",
          150,
          30,
          "Good",
          true,
          "Common, Elvish",
          "Keen Senses, Fey Ancestry, Trance, Subrace",
          "Magical people\
          \
          Understanding of time\
          \
          Wanderlust",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, languages, additional_race_features, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Halfling",
          "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/256/420/618/636271789409776659.png",
          "DEX +2",
          250,
          "Small",
          "3 ft",
          40,
          25,
          "Lawful Good",
          false,
          "Common, Halfling",
          "Lucky, Halfling Nimbleness, Subrace",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, languages, additional_race_features, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Human",
          "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/258/420/618/636271801914013762.png",
          "All +1",
          90,
          "Medium",
          "5 - 7 ft",
          175,
          30,
          "Any Alignment",
          false,
          "Common, +1 Language of your choice",
          "",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, languages, additional_race_features, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Dragonborn",
          "https://i.pinimg.com/originals/fd/94/c2/fd94c2b64f080b5da90cae6d6c3cc186.png",
          "STR +2, CHA +1",
          80,
          "Medium",
          "Well over 6 ft",
          250,
          30,
          "Either good or evil",
          false,
          "Common, Draconic",
          "Draconic Ancestry, Breath Weapon, Damage Resistance",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, languages, additional_race_features, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Gnome",
          "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/334/420/618/636272671553055253.png",
          "INT +2",
          500,
          "Small",
          "3 - 4 ft",
          40,
          25,
          "Good, but sometimes Chaotic",
          true,
          "Common, Gnomish",
          "Gnome Cunning, Subrace",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, languages, additional_race_features, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Half Elf",
          "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/481/420/618/636274618102950794.png",
          "CHA +2, two others +1",
          180,
          "Medium",
          "5 - 6 ft",
          175,
          30,
          "Chaotic",
          true,
          "Common, Elvish, +1 Language of your choice",
          "Fey Ancestry",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, languages, additional_race_features, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Half Orc",
          "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/466/420/618/636274570630462055.png",
          "STR +2, CON +1",
          75,
          "Medium",
          "5 - 7 ft",
          250,
          30,
          "Chaotic, not usually good",
          true,
          "Common, Orc",
          "Menacing, Relentless Endurance, Savage Attacks",
          "",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, languages, additional_race_features, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Tiefling",
          "https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/641/420/618/636287076637981942.png",
          "CHA +2, INT +1",
          100,
          "Medium",
          "5 - 7 ft",
          175,
          30,
          "Chaotic",
          true,
          "Common, Infernal",
          "Hellish Resistance, Infernal Legacy",
          "",
          new Date()
        ]
      )
    ]);
  });
};
