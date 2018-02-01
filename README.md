# DND Designer

DND may be a way of life, but it still has to fit into the rest of what you do.
If you're anything like my players, you've shown up to at least one game and
said, "Aw CRAP! I forgot my character sheet!"

Well fear not! We've got you covered! Use DND Designer to create and manage
your character. Save your characters with your Google login. Access them and
see your character sheet whenever you need. Now you'll never have to remember
which damn spells you had selected!

## Development

### Prepare database:

1. create: `psql -c 'create database dnd_designer;' -d postgres`
2. migrate: `knex migrate:latest`
3. populate: `knex seed:run`

### Set your environment

0. get the keys you'll need. see `env.example` for what you'll need. `cp
   env.example .env` and edit your `.env`.
1. use node v9.4.0 and yarn v1.3.2

### Start your servers

0. `yarn` to install dependencies
1. Start the server: `yarn run server`
2. Start the client: `cd client && yarn run start`
