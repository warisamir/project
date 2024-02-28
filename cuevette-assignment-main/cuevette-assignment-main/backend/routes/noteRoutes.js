const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const groupController = require('../controllers/groupController')
const Note = require('../models/Note');


router.post('/create', noteController.createNote);
// router.get('/notes', noteController.getNotesByGroup);
module.exports = router;
