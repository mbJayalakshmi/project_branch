const express = require('express');
const dataController = require('../controllers/dataController');

const router = express.Router();

router.get('/api/data', dataController.getData);

module.exports = router;
