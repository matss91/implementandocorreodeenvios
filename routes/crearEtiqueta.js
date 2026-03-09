const express = require("express");
const router = express.Router();
const { comprarEtiqueta } = require("../controllers/crearEtiquetaController");

router.post("/", comprarEtiqueta);

module.exports = router;