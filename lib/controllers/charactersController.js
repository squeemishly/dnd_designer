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
  };

  static getSubRace(request, response, next) {
    const { race } = request.params;
    Character.querySubRace(race).then(subrace => {
      if (subrace.length === undefined) {
        response.status(200)
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
