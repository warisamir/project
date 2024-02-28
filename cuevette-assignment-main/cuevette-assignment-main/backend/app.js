const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const groupRoutes = require('./routes/groupRoutes');
const noteRoutes = require('./routes/noteRoutes');
const config = require('./config');
const cors = require('cors');
const groupController = require('./controllers/groupController');
const Note = require('./models/Note')

app.use(cors()); // Enable CORS for all routes

app.use(bodyParser.json());
app.post('/api/getNotes', async (req, res) => {
    try {
        // Extract the group ID from the request body
        const { groupId } = req.body;
        // Fetch the notes for the specified group ID
        const notes = await Note.find({ groupId });
        console.log(notes);
        // Send the notes as the response
        res.json(notes);
    } catch (error) {
        // Handle errors
        console.error('Error fetching notes:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
  });
app.use('/api/groups', groupRoutes);
app.use('/api/notes', noteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
