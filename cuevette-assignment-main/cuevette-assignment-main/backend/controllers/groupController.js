const Group = require('../models/Group')

exports.createGroup = async (req, res) => {
    try {
        const { title, color } = req.body; // Extract group title and color from the request body
        console.log(title);
        console.log(color);
        const group = await Group.create({ title, color }); // Create the new group with title and color
        res.status(201).json(group);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
