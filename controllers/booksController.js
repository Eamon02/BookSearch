// get Book and Doc models
const Books = require('../models/bookmarkdb');

module.exports = {
	// 'api/books' GET
	findAll(req, res) {
		Books.find({})
			// .sort({ date: -1 })
			.then((dbBooks) => res.json(dbBooks))
			.catch((err) => res.status(422).json(err));
	},

	// 'api/books' POST
	saveFavorite(req, res) {
		Books.create(req.body)
			.then((dbBook) => res.json(dbBook))
			.catch((err) => {
				console.log(err);
				res.json(err);
			});
	},

	// 'api/books/:id' DELETE
	deleteFavorite(req, res) {
		Books.findById(req.params.id)
			.then((dbBook) => dbBook.remove())
			.then((dbBook) => res.json(dbBook))
			.catch((err) => {
				console.log(err);
				res.json(err);
			});
	},
};
