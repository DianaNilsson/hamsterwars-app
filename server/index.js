//Use Express
const express = require('express');
const app = express();
// const path = require('path');

// All post.body > json
app.use(express.json());

//Solve cors-problem (while fetching from local ports)
const cors = require('cors');
app.use(cors())


//Port constant: Heruko || Local
const serverPort = process.env.PORT || 3001;

//Serve static images 
app.use('/assets', express.static(__dirname + '/assets'))

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


// Enter Heroku-app routes through url
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname + '/../build/index.html'), function (err) {
//         if (err) {
//             res.status(500).send(err)
//         }
//     })
// })


//Listen to port
app.listen(serverPort, () => {
    console.log(`Server up and running on port ${serverPort}!`);
})