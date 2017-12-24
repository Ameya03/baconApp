var mongoose = require ('mongoose');

// Books Schema

var booksSchema = mongoose.Schema({
        title:{
            type: String
        },
        genre:{
            type: String

        }
});

var books = module.exports = mongoose.model('books',booksSchema);

module.exports.getBooks = function (callback,limit) {
    books.find(callback).limit(limit);

};
