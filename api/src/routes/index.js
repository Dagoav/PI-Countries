const { Router } = require('express');
// Importar todos los routers;
const country = require("./country");
const activity = require("./activity");
const bulk = require("./bulk");
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// landing page
router.get("/", (req, res) => {
    res.send("working")
})


router.use("/countries", country);
router.use("/activity", activity);
router.use("/bulk", bulk);


module.exports = router;
