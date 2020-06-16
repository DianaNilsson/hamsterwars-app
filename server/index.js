//Use Express
const express = require('express');
const app = express();

// All post.body > json
app.use(express.json());

//Solve cors-problem (while fetching local ports)
const cors = require('cors');
app.use(cors())

//Port constant: Heruko || Local
const serverPort = process.env.PORT || 3001;

//Serve static images 
app.use('/assets', express.static('hamsters'))

// Serve the frontend
app.use(express.static(__dirname + '/../build'));


//Routes
const hamstersRoute = require('./routes/hamsters');
const chartsRoute = require('./routes/charts');
const gamesRoute = require('./routes/games');
const statsRoute = require('./routes/stats');

app.use('/hamsters', hamstersRoute);
app.use('/charts', chartsRoute);
app.use('/games', gamesRoute);
app.use('/stats', statsRoute);


//Listen to port
app.listen(serverPort, () => {
    console.log(`Server up and running on port ${serverPort}!`);
})