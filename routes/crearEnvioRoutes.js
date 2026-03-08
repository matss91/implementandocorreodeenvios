const express = require("express");
const router = express.Router();
const { crearEnvio } = require("../controllers/crearEnvioController");

router.post("/", crearEnvio);

module.exports = router;