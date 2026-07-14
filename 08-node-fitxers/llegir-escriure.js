const fs = require("fs");

// Llegir el fitxer
const contingut = fs.readFileSync("dades.txt", "utf-8");
console.log("Contingut llegit:");
console.log(contingut);

// Escriure un fitxer nou amb un missatge
fs.writeFileSync(
  "resultat.txt",
  "Càlcul fet correctament el " + new Date().toLocaleDateString(),
);
console.log("Fitxer 'resultat.txt' creat!");
