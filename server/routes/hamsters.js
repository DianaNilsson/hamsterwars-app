const { db, fieldValue } = require('./../firebase');

const { Router } = require('express');

const router = new Router();

//Get all games
router.get('/', async (req, res) => {

    try {
        let games = [];

        let getGames = await db.collection('games').get()

        getGames.forEach(game => {
            games.push(game.data())
        });

        res.status(200).send(games)

    } catch {
        console.log(err)
        res.status(500).send(err);
    }
})


//Post games
router.post('/', async (req, res) => {

    try {

        let contestantsId = []
        let contestants = []
        let winner;
        let winnerDocId;
        let loosers = [];
        let loosersDocId = [];
        let gameId;

        //Get the id:s of all competing hamsters
        req.body.contestants.forEach(hamster => {
            contestantsId.push(hamster.id);
        });

        //Get all the hamster docs where id matches the contestants id:s
        let getHamsters = await db.collection('hamsters').where('id', 'in', contestantsId).get();

        //Push to the contestants array
        getHamsters.forEach(doc => {
            contestants.push(doc.data());

            //Set winner
            if (doc.data().id == req.body.winner.id) {
                winner = doc.data();
                winnerDocId = doc.id;
            }
            //Set loosers
            else {
                loosers.push(doc.data());
                loosersDocId.push(doc.id);
            }
        })

        //Game id will increase with one for each game
        try {
            let getCounter = await db.collection('games').doc('counter').get()

            if (getCounter.data() !== undefined) {
                gameId = getCounter.data().gameCount + 1;
            } else {
                gameId = 1;
            }
        } catch (err) {
            console.log('Error increasing game id', err);
        }


        //Set/update firestore with a batched write

        //Increment the field's current value by 1
        const increment = fieldValue.increment(1);

        let batch = db.batch();

        //Save the game
        batch.set(db.collection('games').doc(), {
            id: gameId,
            timeStamp: fieldValue.serverTimestamp(),
            contestants,
            winner
        })

        //Set the counter (count all games)
        batch.set(db.collection('games').doc('counter'), {
            gameCount: increment
        }, {
            merge: true
        })

        //Update winner hamster
        batch.update(db.collection('hamsters').doc(winnerDocId), {
            wins: increment,
            games: increment
        })

        //Update loosers hamsters
        loosersDocId.forEach(docId => {
            batch.update(db.collection('hamsters').doc(docId), {
                defeats: increment,
                games: increment
            })
        });

        //Commit writes (as a single unit)
        try {
            batch.commit()
            console.log('Firestore updated successfully!')
        } catch (err) {
            console.log('Error updating Firestore.', err)
        }

        //Send response
        res.status(200).send({
            gameId
            // msg: `Game finished and ${winner.name} won, congratulations!`
        })

    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
})


module.exports = router;