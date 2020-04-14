const express = require('express');
const app = express();
const conn = require('./../database');

function getAll(req, res) {
    let sql = "SELECT * FROM team";
    conn.query(sql, (err, results) => {
        if (err) {
            throw err;
        }

        res.status(200).send({"status": "OK", "error": null, "response": results});
    });
}

function getOne(req, res) {
    let sql = "SELECT * FROM team WHERE id=" + req.params.id;
    conn.query(sql, (err, results) => {
        if (err) {
            throw err;
        }

        res.status(200).send({"status": "OK", "error": null, "response": results});
    });
}

function create(req, res) {
    let data = {name: req.body.name, stadium_name: req.body.stadium_name, capacity: req.body.capacity};
    let sql = "INSERT INTO team SET ?";
    conn.query(sql, data, (err, results) => {
        if (err) {
            throw err;
        }

        res.status(201).send({"status": "OK", "error": null, "response": results});
    });
}

function update(req, res) {
    let sql = "UPDATE team SET name='" + req.body.name + "', stadium_name='" + req.body.stadium_name + "', capacity='" + req.body.capacity + "' WHERE id=" + req.params.id;
    conn.query(sql, (err, results) => {
        if (err) {
            throw err;
        }

        res.status(200).send({"status": "OK", "error": null, "response": results});
    });
}

function remove(req, res) {
    let sql = "DELETE FROM team WHERE id=" + req.params.id + "";
    conn.query(sql, (err, results) => {
        if (err) {
            throw err;
        }

        res.status(204).send({"status": "OK", "error": null, "response": results});
    });
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
};
