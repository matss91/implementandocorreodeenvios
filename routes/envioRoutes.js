const express = require("express");
const router = express.Router();
const { crearEnvio } = require("../controllers/envioController");

router.post("/crear-envio", crearEnvio);

module.exports = router;