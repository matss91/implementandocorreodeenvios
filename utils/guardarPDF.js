const fs = require("fs");
const path = require("path");

function guardarPDF(base64, numeroSeguimiento) {
  const pdfBuffer = Buffer.from(base64, "base64");
  const dir = path.join(__dirname, "../etiquetas");

  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  const fileName = `etiqueta_${numeroSeguimiento}.pdf`;
  const filePath = path.join(dir, fileName);

  fs.writeFileSync(filePath, pdfBuffer);

  return filePath;
}

module.exports = guardarPDF;