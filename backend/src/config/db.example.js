const mongoose = require('mongoose');

// mongodb atlas
const db = mongoose.connect('', {
	useNewUrlParser: true,
});

module.exports = db;
