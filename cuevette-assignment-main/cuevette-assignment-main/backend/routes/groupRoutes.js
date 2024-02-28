const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');
const Group = require('../models/Group');
router.get('/', async (req, res) => {
    try {
      // Fetch all groups from the database
      const groups = await Group.find();
      
      // Send the fetched groups as a response
      res.json(groups);
    } catch (error) {
      // Handle errors
      console.error('Error fetching groups:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  router.post('/add', async (req, res) => {
    try {
        // Extract title and color from the request body
        const { title, color } = req.body;

        // Create a new group with the extracted data
        const group = await Group.create({ title, color });

        // Send a success response with the created group
        res.status(201).json(group);
    } catch (error) {
        // Handle any errors and send an error response
        console.error('Error adding group:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
