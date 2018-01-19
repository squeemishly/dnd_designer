const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const environment = process.env.NODE_ENV || "development";
const configuration = require("../knexfile")[environment];
const database = require("knex")(configuration);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  database.raw(`
    SELECT * FROM users
    WHERE id = ?`,
    [id]
  ).then(user => {
    done(null, user)
  })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const id = profile.id;
      const existingUser = await database.raw(`
          SELECT * FROM users
          WHERE googleID = ?`,
        [id]
      );

      if (existingUser.rows.length > 0) {
        return done(null, existingUser.rows[0]);
      }

      const user = await database.raw(`
          INSERT INTO users("googleid", "username")
          VALUES (?, ?)
          RETURNING id, googleid, username`,
        [id, profile.displayName]
      );

      done(null, user.rows[0]);
    }
  )
);
