const { Router } = require('express');
const router = Router();
const { Country, Activity } = require("../db.js")
const { Op, Sequelize } = require('sequelize')


router.get('/', async (req, res, next) => {
    const { size } = req.query

    try {
        if (size) {
            const country = await Country.findAll();
            res.json(country.length > 0 ? country : []);
        } else {
            next()
        }
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/', async (req, res) => {
    try {
        const country = await Country.findAll({
            // order: [
            //     ['name', 'ASC']
            // ],
        });
        if (country) {
            res.json(country);
        } else {
            res.status(404).send([{ msg: 'No data found.' }])
        }
    } catch (error) {
        res.status(400).json(error)
    }
})


router.get('/search', async (req, res) => {
    const { name } = req.query
    try {
        if (name || name !== "") {
            const country = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                }
            });

            res.json(country.length > 0 ? country : []);
        } else {
            res.json()
        }
    }
    catch (error) {
        res.status(400).json(error)
    }
})


router.get('/continents', async (req, res) => {
    try {
        let continents = await Country.findAll({
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('continent')), 'continent']
            ]
        })

        let result = continents.map(result => result.continent)
        res.json(result)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/byContinent', async (req, res) => {
    const { name } = req.query
    try {
        let allCountries = await Country.findAll({
            where: {
                continent: {
                    [Op.iLike]: `%${name}%`
                }
            }
        })
        if (allCountries && allCountries.length > 0) {
            res.status(200).json(allCountries);
        } else {
            res.status(404).json([])
        }
    } catch (error) {
        res.status(400).json(error)
    }
})


router.get('/byActivity', async (req, res) => {
    const { name } = req.query

    try {
        let allCountries = await Country.findAll({
            include: {
                model: Activity,
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                }
            }
        })
        if (allCountries.length > 0) {
            res.status(200).json(allCountries);
        }
    } catch (error) {
        res.status(400).json(error)
    }

})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const country = await Country.findOne({
            include: { model: Activity },
            where: { id: id.toUpperCase() }
        });

        res.json(country ? country : 'Country not found');
    } catch (error) {
        res.status(400).json(error)
    }
})




module.exports = router;