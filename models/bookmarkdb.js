const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoogleBooksSchema = new Schema({
	book: {
		type: Schema.Types.ObjectId,
	},
	title: {
		type: String,
		required: true,
	},
	authors: {
		type: String,
	},
	description: {
		type: String,
	},
	image: {
		type: String,
	},
	link: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('GoogleBooks', GoogleBooksSchema);
