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
}


module.exports = CharactersController;
