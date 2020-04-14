const express = require('express');
const router = express.Router();
const team = require('./team');

router.get(`/api/v1/team`, team.getAll);
router.post(`/api/v1/team`, team.create);
router.get(`/api/v1/team/:id`, team.getOne);
router.put(`/api/v1/team/:id`, team.update);
router.delete(`/api/v1/team/:id`, team.remove);

module.exports = router;
