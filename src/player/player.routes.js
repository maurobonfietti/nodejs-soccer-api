const express = require('express');
const router = express.Router();
const player = require('./player');

router.get(`/api/v1/player`, player.getAll);
router.post(`/api/v1/player`, player.create);
router.get(`/api/v1/player/:id`, player.getOne);
router.put(`/api/v1/player/:id`, player.update);
router.delete(`/api/v1/player/:id`, player.remove);

module.exports = router;
