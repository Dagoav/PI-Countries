const { Router } = require('express');
const router = Router();
const { Country } = require("../db.js")
const { Op } = require('sequelize')


router.get('/', async (req, res, next) => {
    try {
        const { name } = req.query
        if (name) {
            const country = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                }
            });

            res.json(country ? country : { msg: 'Country not found' });
        } else {
            next()
        }
    }
    catch (error) {
        res.status(400).json(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const country = await Country.findOne({
            where: { id: id.toUpperCase() }
        });

        res.json(country ? country : 'Country not found');
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/', async (req, res) => {
    try {
        const country = await Country.findAll();
        res.json(country.length ? country : 'No data found');
    } catch (error) {
        res.status(400).json(error)
    }
})






module.exports = router;