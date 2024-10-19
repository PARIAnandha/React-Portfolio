const express = require('express');
const { createMessage, getMessages } = require('../Controllers/messageController');
const router = express.Router();

// Route to create a new message
router.post('/messages',createMessage);

// Route to get all messages
router.get('/messages', getMessages);

module.exports = router;
