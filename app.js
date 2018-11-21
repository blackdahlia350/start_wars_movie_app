var express = require('express');

// Start our express application
var app = express();

// Installing ejs module through npm allows us to render external html files and 'templates'
app.set('view engine', 'ejs');          

// Will get all of the routes we have in the routes folder and put it in our variable
var routes = require('./routes');

// Need to tell express that the static assets are in the public path directory - helps us save code and time specifying the actual path on each reference
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// Home
app.get('/', routes.home);

// Movie single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

// Not found - our 404 page not found template
app.get('*', routes.notFound);

app.get('/darth', routes.darth);

// App to listen on port 3000
// app.listen(3000, function() {
//     console.log("The application is running on localhost:3000");
// });
app.listen(process.env.PORT || 3000);