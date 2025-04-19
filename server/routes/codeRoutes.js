const express = require('express');
const { verifyToken } = require('../middleware/authMiddlewares');
const { runCodeSecurely } = require('../controllers/codeController');

const router = express.Router();

router.post('/run', verifyToken, runCodeSecurely);

module.exports = router;
