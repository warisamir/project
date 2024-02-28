const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://warisamir1918:waris1918@cluster0.2wvsbor.mongodb.net/notes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB', err));

module.exports = mongoose;