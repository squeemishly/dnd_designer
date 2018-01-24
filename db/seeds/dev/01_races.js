exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE TABLE races, subraces CASCADE").then(function() {
    return Promise.all([
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, languages, additional_traits, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
          "Dwarves are short and solidly built. They live mostly in hills and mountains to be close to the stone they love. They tend to be cunning craftsmen of stone and metal.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, languages, additional_traits, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
          "Elves are an inherently magical people. They tend to be curious and adventurous, seeking a way to keep their time interesting over their incredibly long lives.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, languages, additional_traits, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
          "Halflings are short, good natured people. They love their friends and family and love sharing their homes with them. They rarely want more out of life than a warm home, a comfortable bed, and some good company.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, languages, additional_traits, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
          "There is a broad variety in human culture and expectations. Humans tend to be adaptable, which leads to a quite varied existance amongst all the groups and cities. They do tend to be the most ambitious of the races, seeking out fame, glory, power, and above all, wealth.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, languages, additional_traits, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
          "Dragonborn are proud and strong. They are decendants of dragons, but with humanoid appearance. Dragonborn believe in the clan they belong to above all else, and they will do everything to ensure the success and longevity of that clan.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, languages, additional_traits, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
          "Gnomes are joyful, happy creatures. They love to explore and figure out how things work. They are delighted by everything, including their own existance. They love surrounding themselves by bright happy things hearing tales of harrowing adventures.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, languages, additional_traits, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
          "Half Elves are an intersection between their Human and Elven parentage. They don't look quite like a human, they don't look quite elven. They live longer than humans but not as long as elves. They tend to live in between cultures, travelling from city to city and meeting people around the world. Due to their heritage, they have a broader understanding of how people work, so they tend to be good negotiators and peace makers.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, languages, additional_traits, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
          "Desendants of Humans and Orcs, Half Orcs generally maintain the brutality of their Orc parents but temper it with the intellegence and adaptability of their Human parent. Half Orcs experience emotion more deeply than other races. They'll laugh the loudest, drink the most, dance the wildest. And when rage sets in, they feel a fire in their bodies to let it out.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, languages, additional_traits, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
          "Tieflings are the product of a Human pact with Asmodeus the infernal overlord of the Nine Hells. They look like demons which leads the other races to fear them. Because of the treatment Tieflings tend to receive, they tend not to trust the other races either. But once someone has proven themselves a Tiefling's friend, that Tiefling will be a loyal ally forever.",
          new Date()
        ]
      )
    ]);
  });
};
