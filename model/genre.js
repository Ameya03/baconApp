var mongoose = require ('mongoose');


// genre schema

var genreSchema = mongoose.Schema({
     name:{
        type:String,
        required:true
    }
});

var Genre = module.exports = mongoose.model('Genre',genreSchema);


// get genres

module.exports.getGenres = function (callback,limit) {
    Genre.find(callback).limit(limit);

};


