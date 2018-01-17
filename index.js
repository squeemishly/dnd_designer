const express = require("express");
const passport = require("passport");
require("./services/passport");

const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
