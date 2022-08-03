const { Router } = require('express');
const router = Router();
const { Activity } = require('../db.js')


router.get("/", (req, res) => {
    res.send("activities")
})

module.exports = router;