## Development

1. Prepare database:
    1. create: `psql -c 'create database dnd_designer;' -d postgres`
    2. migrate: `knex migrate:latest`
    3. populat: `knex seed:run`
