const express = require('express');
const app = express();
const conn = require('./../database');

function getAll(req, res) {
    let sql = "SELECT * FROM player";
    conn.query(sql, (err, results) => {
        if (err) {
            throw err;
        }

        res.status(200).send({"status": "OK", "error": null, "response": results});
    });
}

function getOne(req, res) {
    let sql = "SELECT * FROM player WHERE id=" + req.params.id;
    conn.query(sql, (err, results) => {
        if (err) {
            throw err;
        }

        res.status(200).send({"status": "OK", "error": null, "response": results});
    });
}

function create(req, res) {
    let data = {name: req.body.name};
    let sql = "INSERT INTO player SET ?";
    conn.query(sql, data, (err, results) => {
        if (err) {
            throw err;
        }

        res.status(201).send({"status": "OK", "error": null, "response": results});
    });
}

function update(req, res) {
    let sql = "UPDATE player SET name='" + req.body.name + "' WHERE id=" + req.params.id;
    conn.query(sql, (err, results) => {
        if (err) {
            throw err;
        }

        res.status(200).send({"status": "OK", "error": null, "response": results});
    });
}

function remove(req, res) {
    let sql = "DELETE FROM player WHERE id=" + req.params.id + "";
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
