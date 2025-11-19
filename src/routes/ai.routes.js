const express = require('express');
const router = express.Router();
const aiController = require('../controller/ai.controller');
router.post("/review", aiController.getRespnse)

module.exports = router;