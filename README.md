# DND Designer

DND may be a way of life, but it still has to fit into the rest of what you do. If you're anything like my players, you've shown up to at least one game and said, "Aw CRAP! I forgot my character sheet!"

Well fear not! We've got you covered! Use DND Designer to create and manage your character. Save your characters with your Google login. Access them and see your character sheet whenever you need. Now you'll never have to remember which damn spells you had selected!

## Development

1. Prepare database:
    1. create: `psql -c 'create database dnd_designer;' -d postgres`
    2. migrate: `knex migrate:latest`
    3. populat: `knex seed:run`

2. See the app:
    1. In the root of the app: `yarn run server`
    2. Open a second terminal window: `cd client`
    3. In the client window: `yarn run start`
