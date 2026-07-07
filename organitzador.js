const fs = require('fs');
const path = require('path');

const CARPETA_ORIGEN = process.argv[2] || __dirname;

const CATEGORIES = {
  imatges: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'],
  documents: ['.pdf', '.doc', '.docx', '.txt', '.odt', '.xls', '.xlsx', '.ppt', '.pptx'],
  audio: ['.mp3', '.wav', '.flac', '.aac', '.ogg'],
  video: ['.mp4', '.avi', '.mkv', '.mov', '.wmv'],
  comprimits: ['.zip', '.rar', '.7z', '.tar', '.gz'],
};

function categoriaPerExtensio(extensio) {
  for (const [categoria, extensions] of Object.entries(CATEGORIES)) {
    if (extensions.includes(extensio)) return categoria;
  }
  return 'altres';
}

function organitzarCarpeta(carpeta) {
  const elements = fs.readdirSync(carpeta, { withFileTypes: true });

  for (const element of elements) {
    if (!element.isFile()) continue;

    const extensio = path.extname(element.name).toLowerCase();
    if (!extensio) continue;

    const categoria = categoriaPerExtensio(extensio);
    const carpetaDesti = path.join(carpeta, categoria);

    if (!fs.existsSync(carpetaDesti)) {
      fs.mkdirSync(carpetaDesti, { recursive: true });
    }

    const origen = path.join(carpeta, element.name);
    const desti = path.join(carpetaDesti, element.name);

    if (origen === desti) continue;

    fs.renameSync(origen, desti);
    console.log(`Mogut: ${element.name} -> ${categoria}/`);
  }
}

organitzarCarpeta(CARPETA_ORIGEN);
console.log('Organitzacio completada.');
