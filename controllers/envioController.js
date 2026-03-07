const axios = require("axios");
const { CORREO_API_URL, API_KEY } = require("../config/correoConfig");
const guardarPDF = require("../utils/guardarPDF");

async function crearEnvio(req, res) {
  try {

    const { destinatario, direccion, ciudad, codigoPostal, peso } = req.body;

    const envioData = {
      destinatario,
      direccion,
      ciudad,
      codigo_postal: codigoPostal,
      peso,
      servicio: "paquete_estandar"
    };
//asi se usa en correo argentino
/*     const response = await axios.post(`${CORREO_API_URL}/crear-envio`, envioData, {
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      }
    }); */

    //es para desarroyo 

    const response = await axios.post(`${CORREO_API_URL}/shipments`, envioData, {
  headers: {
    "X-Shipit-Email": "tu-correo@ejemplo.com",
    "X-Shipit-Access-Token": API_KEY,
    "Content-Type": "application/json",
    "Accept": "application/vnd.shipit.v2"
  }
});

    const { numeroSeguimiento, etiqueta } = response.data;

    //const archivoEtiqueta = guardarPDF(etiqueta, numeroSeguimiento);

    res.json({
      ok: true,
      numeroSeguimiento,
      //archivoEtiqueta
    });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ ok: false, error: error.response?.data || error.message });
  }
}

module.exports = { crearEnvio };