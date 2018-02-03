const Character = require("../models/Character");

class CharactersController {
  static getRace(request, response, next) {
    const { name } = request.params;
    Character.queryRace(name).then(race => {
      if (race.length === 0) {
        response.status(404).send({ error: "Resource not found" });
      } else {
        response.status(200).json(race);
      }
    });
  }

  static getRaceDetails(request, response, next) {
    const { race } = request.params;
    return new Promise((resolve, reject) => {
      let data = {}

      Promise.all([
        Character.querySubRace(race),
        Character.queryBackground()
      ]).then(result => {
        data.subraces = result[0];
        data.backgrounds = result[1];

        resolve(response.status(200).json(data));
      }).catch(error => {
        reject(response.status(404).send({ error: "Resource not found" }))
      })
    })
  }

  static postCharacter(request, response, next) {
    console.log(request.query);
  };

  static getSubRace(request, response, next) {
    const { race } = request.params;
    Character.querySubRace(race).then(subrace => {
      if (subrace.length === 0) {
        response.status(404).send({ error: "Resource not found" })
      } else {
        response.status(200).json(subrace);
      }
    })
  };

  static postCharacter(request, response, next) {
    console.log(request.query)
  }
}

module.exports = CharactersController;
