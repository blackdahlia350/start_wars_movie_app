// Routes

// Get access to the movies.json file
var moviesJSON = require('../movies.json');

// Home
//app.get('/', function(req, res){          // changed to...
// Exporting the functionality instead
exports.home = function(req, res) {

    var movies = moviesJSON.movies;

    //res.send("This is a server response on the home page");
    // By default, ejs will look in the views folder and we only need to specify the name and not the extension
    res.render('home', {
        title: "Star Wars Movie",
        movies: movies
        //movies: ["The first movie", "The second movie", "The third movie"]
    });
};

// Movie single
exports.movie_single = function(req, res){
    var episode_number = req.params.episode_number;
    var movies = moviesJSON.movies;
    //res.send("This is the page number for episode " + episode_number);
    
    if (episode_number >= 1 && episode_number <= 6)
    {
        var movie = movies[episode_number - 1];
        var title = movie.title;
        var main_characters = movie.main_characters

        res.render('movie_single', {
            movies: movies,
            title: title,
            movie: movie,
            main_characters: main_characters
        });
    }
    else
    {
        //res.send("This is not the page you are looking for");
        res.render('notFound', {
            movies: movies,
            title: "This is not the page you are looking for"
        });
    }
};

// Not found - our 404 page not found template
exports.notFound = function(req, res){
    //res.send("This is not the page you are looking for");
    var movies = moviesJSON.movies;
    res.render('notFound', {
        movies: movies,
        title: "This is not the page you are looking for"
    });
};

exports.darth = function(req, res){
    res.send("This is a server response on the darth page");
};