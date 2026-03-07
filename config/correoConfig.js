// config/correoConfig.js

// URL base de la API del servicio de correo
const CORREO_API_URL = process.env.CORREO_API_URL; // <- cambia esto por la URL real

// Tu API key proporcionada por el servicio de correo
const API_KEY = process.env.API_KEY; // <- reemplaza con tu API key real

module.exports = {
  CORREO_API_URL,
  API_KEY
};