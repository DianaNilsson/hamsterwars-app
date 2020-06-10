const { db } = require('./../firebase');

const { Router } = require('express');

const router = new Router();

//Get top 5 winning hamsters
router.get('/top', async (req, res) => {

    try {
        let topHamsters = [];

        //Get ONLY top 5 most winning hamster docs
        let getHamsters = await db.collection('hamsters').orderBy('wins', 'desc').limit(5).get()


        getHamsters.forEach(doc => {
            topHamsters.push(doc.data());
        })

        res.status(200).send(topHamsters)

    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
})

//Get bottom 5 hamsters
router.get('/bottom', async (req, res) => {

    try {
        let mostDefeatedHamsters = [];

        //Get only TOP 5 most defeated hamster docs
        let getHamsters = await db.collection('hamsters').orderBy('defeats', 'desc').limit(5).get()

        getHamsters.forEach(doc => {
            mostDefeatedHamsters.push(doc.data());
        })

        res.status(200).send(mostDefeatedHamsters)

    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
})


module.exports = router;