 require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");


const cors = require("cors");


const app = express();
app.use(express.json());
 app.use(cors()); // permite todas las origins
// Rutas
app.use("/api/crear-envio",require("./routes/crearEnvioRoutes"));
app.use("/api/crear-etiqueta",require("./routes/crearEtiqueta"));

app.listen(3000, () => {
  console.log("API corriendo en http://localhost:3000");
});