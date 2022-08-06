const { Router } = require('express');
const router = Router();
const { Activity, Country, country_activity } = require('../db.js')


router.post("/", async (req, res) => {
    const { name, dificulty, duration, season } = req.body;
    try {
        const newActivity = await Activity.create({
            name,
            dificulty,
            duration,
            season
        });

        res.status(201).json(newActivity);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post("/byCountry", async (req, res) => {
    let { code, id } = req.body
    let result = {
        success: false,
        msg: "",
        content: ""
    }

    try {
        const activity = await Activity.findOne({
            where: { id: parseInt(id) }
        });

        const country = await Country.findOne({
            where: { id: code.toUpperCase() }
        });


        if (activity && country) {
            const activityBycountry = await country_activity.create({
                countryId: code,
                activityId: id
            })

            result.success = true;
            result.msg = `Actividad correctamente agregada a ${country.name}`
            result.content = activityBycountry
            res.json(result)
        } else {
            res.json(result)
        }

        res.json(result)
    } catch (error) {
        res.status(500).send(error)
    }
})

// router.post("/", async (req, res) => {
//     const {name, difficulty, duration, season, countriesId} = req.body;
//     try {
//         const newActivity = await Activity.create({
//             name: name,
//             difficulty: difficulty,
//             duration: duration,
//             season: season,
//         });

//         newActivity.addCountry(countriesId);
//         // res.json(newActivity);
//         // status 201 -> creado
//         res.status(201).send(newActivity);
//     } catch(e) {
//         res.status(500).send(e);
//     }
// });

module.exports = router;