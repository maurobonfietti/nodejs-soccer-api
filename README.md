# Node.js Soccer API

Mini Soccer API: allow you to manage soccer teams and players.

Written in Node.js using Express and storing data with MySQL.

## Basic Commands

```bash
# Install Dependencies
npm install

# Start local server
npm start

# Start dev server using nodemon
npm run local # or: npx nodemon

# Testing & Code Coverage
npm test
```

## MySQL DB

Create a new MySQL database. Create tables and insert data using the file `db.sql`.

Configure the MySQL connection with the file `src/database.js`.

```javascript
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs-soccer-api'
});
```

## Endpoints Summary

### Info

- Default: `GET http://localhost:3000`

### Team

- Get All Teams: `GET http://localhost:3000/api/v1/team`

- Create Team: `POST http://localhost:3000/api/v1/team`

- Get One Team: `GET http://localhost:3000/api/v1/team/{{id}}`

- Update Team: `PATCH http://localhost:3000/api/v1/team/{{id}}`

- Delete Team: `DELETE http://localhost:3000/api/v1/team/{{id}}`

### Player

- Get All Players: `GET http://localhost:3000/api/v1/player`

- Create Player: `POST http://localhost:3000/api/v1/player`

- Get One Player: `GET http://localhost:3000/api/v1/player/{{id}}`

- Update Player: `PATCH http://localhost:3000/api/v1/player/{{id}}`

- Delete Player: `DELETE http://localhost:3000/api/v1/player/{{id}}`


## That's all

I hope you enjoy it :-)
