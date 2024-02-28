const Note = require('../models/Note');

exports.createNote = async (req, res) => {
    try {
        const note = await Note.create(req.body);
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
