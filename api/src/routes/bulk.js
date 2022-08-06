const { Router } = require('express');
const router = Router();
const { Country } = require("../db.js")
const axios = require("axios");


let apiURL = "https://restcountries.com/v3"


// poner auth a bulk
router.get("/", async (req, res) => {
    let result = {
        success: false,
        message: ""
    }

    try {
        let data = await axios.get(`${apiURL}/all`).then(response => response.data);
        let data_format = data.map(d => ({
            id: d.cioc ? d.cioc : d.cca3,
            name: d.name.common,
            img_flag: d.flags[0],
            continent: d.continents[0],
            capital: Array.isArray(d.capital) ? d.capital[0] : d.capital,
            subregion: d.subregion,
            area: d.area,
            population: d.population
        }))

        await Country.bulkCreate(data_format)
        result.success = true;
        result.message = "Países agregados a bd"
        res.json(result)

    } catch (erorr) {
        res.status(500).json(erorr)
    }
})


// Agregar un país
router.get("/:code", async (req, res) => {
    let result = {
        success: false,
        message: ""
    }

    try {
        let { code } = req.params
        let data = await axios.get(`${apiURL}/name/${code}`).then(response => response.data);
        let data_format = data.map(d => ({
            id: d.cioc ? d.cioc : d.cca3,
            name: d.name.common,
            img_flag: d.flags[0],
            continent: d.continents[0],
            capital: Array.isArray(d.capital) ? d.capital[0] : d.capital,
            subregion: d.subregion,
            area: d.area,
            population: d.population
        }))

        await Country.bulkCreate(data_format)
        result.success = true;
        result.message = `País ${code} agregado a bd`
        res.json(result)

    } catch (erorr) {
        res.status(500).json(erorr)
    }
})


module.exports = router;