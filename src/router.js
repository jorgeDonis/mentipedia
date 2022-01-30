// Imports
const express = require('express');
const { Damned } = require('./models/Damned')
const { getTopDamned } = require("./controllers/DamnedController");

let router = express.Router();

router.get('/', async (req, res) => {
    const topDamned = await getTopDamned();
    res.render("index", {
        damned: topDamned
    });
});

router.get('/criticado/:damnedId', (req, res) => {
    res.send(req.params.damnedId);
})

exports.router = router;