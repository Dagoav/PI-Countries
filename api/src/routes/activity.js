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

        res.json(newActivity);
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


    } catch (error) {
        res.status(500).send(error)
    }
})



module.exports = router;