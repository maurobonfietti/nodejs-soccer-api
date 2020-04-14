const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const team = require('./team/team.routes');
const player = require('./player/player.routes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', team);
app.use('/', player);

app.get('/', (req, res) => {
    const msg = {
        message: 'Welcome!',
        api: 'nodejs-soccer-api',
        version: '1.0.0',
        time: Date.now()
    };

    res.status(200).send(msg);
});

app.use((req, res) => {
    res.status(404).send({error: 'Not Found - Error 404.'});
});

module.exports = app;
