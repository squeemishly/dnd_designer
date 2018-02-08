exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE TABLE backgrounds, characters CASCADE").then(function() {
    return Promise.all([
      knex.raw(
        "INSERT INTO backgrounds (name, skill_proficiencies, languages, tool_proficiencies, equipment, feature, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Acolyte",
          "Insight, Religion",
          "Two of your choice",
          "",
          "A holy symbol, a prayer book or prayer wheel, 5 sticks of incense, vestments, common clothes, a belt pouch w/ 15gp",
          "SHELTER OF THE FAITHFUL: Recieve free healing at temples of your faith. Acolytes might also have a room at a specific temple.",
          "Acolytes spend their entire lives serving a god or pantheon of gods. They perform sacred rites, but do not necessarily channel divine power.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO backgrounds (name, skill_proficiencies, languages, tool_proficiencies, equipment, feature, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Charlatan",
          "Deception, Sleight of Hand",
          "",
          "Disguise kit, forgery kit",
          "Fine clothes, disguise kit, tools of the con of your choice, a belt pouch containing 15gp",
          "FALSE IDENTITY: Charlatans have prepared a second identity complete with forged documents, established relationships, and complete disguises.",
          "Charlatans are good with people. They know how to get people to do what they want them to. They can easily become the center of attention when they want a crowd.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO backgrounds (name, skill_proficiencies, languages, tool_proficiencies, equipment, feature, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Criminal",
          "Deception, Stealth",
          "",
          "One type of gaming set, theives' tools",
          "Crowbar, dark common clothes with a hood, a belt pouch containing 15gp",
          "CRIMINAL CONTACT: Criminals have a reliable contact in the criminal underworld. No matter where they are in the world, they always have a way of communicating with their contact.",
          "Criminals can be evil people through and through, but some are just people in a career. They always make a life out of thwarting the rules of society.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO backgrounds (name, skill_proficiencies, languages, tool_proficiencies, equipment, feature, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Entertainer",
          "Acrobatics, Performance",
          "",
          "Disguise kit, one type of musical instrument",
          "One musical instrument, the favor of an admirer, a costume, a belt pouch containing 15gp",
          "BY POPULAR DEMAND: Entertainers can always find a place to perform. In return for providing a night of much needed entertainment, they receive free food and lodging.",
          "Entertainers know how to work an audience. They have big personalities and thrive when they have the attention of a room full of people.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO backgrounds (name, skill_proficiencies, languages, tool_proficiencies, equipment, feature, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Folk Hero",
          "Animal Handling, Survival",
          "",
          "One type of artisan's tools, land vehicles",
          "One set of artisan's tools, a shovel, an iron pot, common clothes, a belt pouch containing 10gp",
          "RUSTIC HOSPITALITY: Because folk heros grew up among the common people, they know how to fit in among them. Commoners will sheild them from anyone searching for them, but will not risk their lives for a folk hero.",
          "Folk heros come from humble beginnings and have gained renown through their deeds.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO backgrounds (name, skill_proficiencies, languages, tool_proficiencies, equipment, feature, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Guild Artisan",
          "Insight, Persuasion",
          "One of your choice",
          "One type of artisan's tools",
          "One set of artisan's tools, a letter of introduction from your guild, traveler's clothes, a belt pouch containing 15gp",
          "GUILD MEMBERSHIP: Guilds are powerful in the land of Faerun. Guilds bestow upon their members access to powerful guild members, resouces, and guild support. But, guild members must be prepared to pay the 5gp/month fee.",
          "Guild artisans are skilled in a particular needed craft, e.g. alchemy, armory, brewery. They learned their skills from a master artisan and have since earned their place in the world.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO backgrounds (name, skill_proficiencies, languages, tool_proficiencies, equipment, feature, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Hermit",
          "Medicine, Religion",
          "One of your choice",
          "Herbalism kit",
          "Scroll case stuffed with notes from studies or prayers, winter blanket, common clothes, herbalism kit, 5gp",
          "DISCOVERY: The life of quiet seclusion hermits lead have given them insight into a powerful discovery. It could be a cosmic truth or an understanding of the gods. It depends on the nature of their hermitage.",
          "Hermits have spent a formative part of their lives secluded from the world. Some hermits crave the solitude of those years, some have been driven insane by it.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO backgrounds (name, skill_proficiencies, languages, tool_proficiencies, equipment, feature, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Noble",
          "History, Persuasion",
          "One of your choice",
          "One type of gaming set",
          "Fine clothes, signet ring, scroll of pedigree, a purse containing 25gp",
          "POSITION AND PRIVILEGE: People tend to assume that nobles have a right to be wherever they are. Commoners try to please nobles, and noble birth grants nobles audience with othes local nobles wherever they go.",
          "Nobles can get to their position through birth or by being raised up by their success. A noble can also be the miscreant offspring of a house down on it's luck. Nobles will have a title and they might have a signet ring and/or a coat of arms.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO backgrounds (name, skill_proficiencies, languages, tool_proficiencies, equipment, feature, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Outlander",
          "Athletics, Survival",
          "One of your choice",
          "One type of musical instrument",
          "Staff, hunting trap, trophy from an animal, traveler's clothes, belt pouch containing 10gp",
          "WANDERER: Outlanders can easily recall features of the land around them. They can also find food and fresh water for up to 5 people each day provided the land has berries and game.",
          "Outlanders generally have grown up far from civilization. This makes them incredibly capable at survival, but maybe not so successful at all the social niceties that makes societies work.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO backgrounds (name, skill_proficiencies, languages, tool_proficiencies, equipment, feature, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Sage",
          "Arcana, History",
          "Two of your choice",
          "",
          "Bottle black ink, quill, small knife, letter from a dead colleague asking a question you still can't answer, common clothes, belt pouch containing 10gp",
          "RESEARCHER: When a sage wants to know something, they generally know where to find the information they are looking for.",
          "Sages spend years studying the stories that make up the universe. They have a single minded passion for learning and understanding the world around them.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO backgrounds (name, skill_proficiencies, languages, tool_proficiencies, equipment, feature, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Sailor",
          "Athletics, Perception",
          "",
          "Navigator's tools, water vehicles",
          "Belaying pin, 50ft silk rope, a lucky charm, common clothes, belt pouch containing 10gp",
          "SHIP'S PASSAGE: In exchange for your work, sailors can secure free passage aboard a ship. They can't determine the exact course the ship will travel when they catch a free ride.",
          "Sailors may be known for their uncouth behaviors, but the responsibilities of ship life also make them reliable.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO backgrounds (name, skill_proficiencies, languages, tool_proficiencies, equipment, feature, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Soldier",
          "Athletics, Intimidation",
          "",
          "One type of gaming set, land vehicles",
          "Insignia of rank, trophy from a fallen enemy, bone dice or deck of cards, common clothes, belt pouch containing 10gp",
          "MILITARY RANK: Soldiers retain the presige of their rank after they retire from the military. They can assert their rank over lower ranked soldiers and requisition simple equipment for short term use.",
          "Soldiers have spent their lives preparing for and fighting in wars. They are experienced in the battlefield and rarely lose their cool. They form strong bonds with the folks fighting in their party.",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO backgrounds (name, skill_proficiencies, languages, tool_proficiencies, equipment, feature, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Urchin",
          "Slight of Hand, Stealth",
          "",
          "Disguise kit, thieves' tools",
          "Small knife, map of the city they grew up in, pet mouse, token to remember their parents, common clothes, belt pouch containing 10gp",
          "CITY SECRETS: Growing up in the bowels of the city has taught urchins the layout and flow of cities. When they are not in combat, urchins can find their way between 2 points in the city twice as fast as they might otherwise.",
          "Urchins lives are defined by the poverty they grew up in. They are commonly motivated by a deep commitment to the people they are connected to on the street and a desperate desire to create a better life.",
          new Date()
        ]
      )
    ]);
  });
};
