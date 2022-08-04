const { Router } = require('express');
const router = Router();
const { Country, Activity } = require("../db.js")
const { Op } = require('sequelize')




router.get('/', async (req, res, next) => {
    const { size } = req.query
    try {
        if (size) {
            const country = await Country.findAll({
                limit: parseInt(size),
            });
            res.json(country.length > 0 ? country : 'No data found');
        } else {
            next()
        }
    } catch (error) {
        res.status(400).json(error)
    }
})


router.get('/', async (req, res) => {
    const { name } = req.query
    try {
        if (name) {
            const country = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                }
            });

            res.json(country.length > 0 ? country : { msg: 'Country not found' });
        } else {
            const country = await Country.findAll();
            res.json(country.length ? country : 'No data found');
        }
    }
    catch (error) {
        res.status(400).json(error)
    }
})

router.get('/byActivity', async (req, res) => {
    try {
        let allCountries = await Country.findAll({ include: { model: Activity } })
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
            where: { id: id.toUpperCase() }
        });

        res.json(country ? country : 'Country not found');
    } catch (error) {
        res.status(400).json(error)
    }
})



// router.get('/', async (req, res) => {
//     try {
//         const country = await Country.findAll();
//         if (country) {
//             res.json(country);
//         } else {
//             res.status(404).send('No data found.')
//         }
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })


module.exports = router;