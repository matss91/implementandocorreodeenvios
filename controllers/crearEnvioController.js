const axios = require("axios");
const { CORREO_API_URL, API_KEY } = require("../config/correoConfig");
const guardarPDF = require("../utils/guardarPDF");

async function crearEnvio(req, res) {
  try {
    // Recibimos también los productos
    const { destinatario, direccion, ciudad, codigoPostal, peso, productos } = req.body;

    const envioData = {
      destinatario,
      direccion,
      ciudad,
      codigo_postal: codigoPostal,
      peso,
      servicio: "paquete_estandar"
    };

    // En desarrollo / Shipit
    const response = await axios.post(`${CORREO_API_URL}/shipments`, envioData, {
      headers: {
        "X-Shipit-Email": "tu-correo@ejemplo.com",
        "X-Shipit-Access-Token": API_KEY,
        "Content-Type": "application/json",
        "Accept": "application/vnd.shipit.v2"
      }
    });

    const { numeroSeguimiento, etiqueta } = response.data;

    // Guardamos la etiqueta si es necesario
    // const archivoEtiqueta = guardarPDF(etiqueta, numeroSeguimiento);

    // Respondemos incluyendo los productos
    res.json({
      ok: true,
      numeroSeguimiento,
      // archivoEtiqueta,
      productos // <-- enviamos todos los productos comprados
    });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ ok: false, error: error.response?.data || error.message });
  }
}

module.exports = { crearEnvio };