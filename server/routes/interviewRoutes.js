const express = require('express');
const { verifyToken } = require('../middleware/authMiddlewares');
const { getInterviewSession, createInterview } = require('../controllers/interviewController');

const router = express.Router();

router.get('/:id', verifyToken, getInterviewSession);
router.post('/create', verifyToken, createInterview);

module.exports = router;
