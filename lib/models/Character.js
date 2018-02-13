const environment = process.env.NODE_ENV || "development";
const configuration = require("../../knexfile")[environment];
const database = require("knex")(configuration);

class Character {
  static queryAllRaces() {
    return database
    .raw(`SELECT * FROM races`)
    .then(response => {
      return response.rows;
    });
  };

  static queryRace(id) {
    return database
    .raw(`SELECT * FROM races WHERE id = ? `, [id])
    .then(response => {
      return response.rows[0];
    });
  };

  static queryRaceByName(name) {
    return database
    .raw(`SELECT * FROM races WHERE name = ? `, [name])
    .then(response => {
      return response.rows[0];
    });
  };

  static querySubRace(race) {
    return database
    .raw(`
    SELECT subraces.id, subraces.name, subraces.ability_score_increase, subraces.traits FROM subraces
    INNER JOIN races ON subraces.race_id = races.id
    WHERE races.name = ?`, [race])
    .then(response => {
      return response.rows
    })
    .catch(error => {
      return null
    })
  }

  static queryBackground() {
    return database.raw(`
    SELECT * from backgrounds`)
    .then(response => {
      return response.rows
    })
    .catch(error => {
      return null
    })
  }

  static queryClasses() {
    return database.raw(`
    SELECT * from classes`)
    .then(response => {
      return response.rows
    })
    .catch(error => {
      return null
    })
  }

  static withSubraceId(name, raceId, subraceId, backgroundId, userId, classId) {
    return database.raw(`
      INSERT INTO characters (name, race_id, subrace_id, background_id)
      VALUES (?, ?, ?, ?)
      RETURNING id`,
      [
        name,
        raceId,
        subraceId,
        backgroundId
      ])
    .then(data => {
      const charId = data.rows[0].id
      return database.raw(`
        INSERT INTO user_characters (user_id, character_id)
        VALUES (?, ?)
        RETURNING character_id`,
      [userId, charId])
      .then(data => {
        const charId = data.rows[0].character_id
        return database.raw(`
          INSERT INTO character_classes (character_id, class_id, level)
          VALUES (?, ?, ?)
          RETURNING character_id`,
        [charId, classId, 1])
        .then(data => {
          console.log('final return: ', data.rows)
        })
      })
    })
  }

  static withoutSubraceId(name, raceId, backgroundId, userId, classId) {
    return database.raw(`
      INSERT INTO characters (name, race_id, background_id)
      VALUES (?, ?, ?)
      RETURNING id`,
      [
        name,
        raceId,
        backgroundId
      ])
    .then(data => {
      const charId = data.rows[0].id
      return database.raw(`
        INSERT INTO user_characters (user_id, character_id)
        VALUES (?, ?)
        RETURNING character_id`,
      [userId, charId])
      .then(data => {
        const charId = data.rows[0].character_id
        return database.raw(`
          INSERT INTO character_classes (character_id, class_id, level)
          VALUES (?, ?, ?)
          RETURNING character_id`,
        [charId, classId, 1])
        .then(data => {
          console.log('final return: ', data.rows)
        })
      })
    })
  }

  static createCharacter(req, res) {
    const raceId = req.race
    const backgroundId = req.background
    const classId = req.class
    const userId = req.userId
    const name = `New Character`
    const subraceId = req.subrace

    if(subraceId===null) {
      return this.withoutSubraceId(name, raceId, backgroundId, userId, classId)
    } else {
      return this.withSubraceId(name, raceId, subraceId, backgroundId, userId, classId)
    }


  }
}

module.exports = Character;
