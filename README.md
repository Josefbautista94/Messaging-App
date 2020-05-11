# Messaging app

Group project by David, Jose, Carlos, Abraham

# Database setup

Run this to complete setup:

`psql postgres -h 127.0.0.1 -d postgres -f init.sql`

Visit [init.sql](./init.sql) file to learn how to remove setup.

### Run these to create and drop tables:

create: `npx sequelize-cli db:migrate`

drop: `npx sequelize-cli db:migrate:undo:all`

### Run these to add and remove fake data:

add: `npx sequelize-cli db:seed:all`

remove: `npx sequelize-cli db:seed:undo:all`
