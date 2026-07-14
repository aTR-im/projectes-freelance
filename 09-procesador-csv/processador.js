const fs = require("fs");
const { parse } = require("csv-parse/sync");

// 1. Llegir el fitxer CSV com a text
const contingut = fs.readFileSync("clients.csv", "utf-8");

// 2. Convertir el text a un array d'objectes
const clients = parse(contingut, {
  columns: true, // fa servir la primera línia (nom,email,vendes) com a claus
  skip_empty_lines: true,
});

console.log("Clients llegits:", clients);

// 3. Calcular estadístiques (fem servir el que ja saps: map, reduce, filter)
const vendesTotals = clients.reduce((acc, c) => acc + Number(c.vendes), 0);
const mitjana = vendesTotals / clients.length;
const millorClient = clients.reduce((millor, actual) =>
  Number(actual.vendes) > Number(millor.vendes) ? actual : millor,
);

console.log("\n--- RESUM ---");
console.log("Total de vendes:", vendesTotals);
console.log("Mitjana de vendes:", mitjana.toFixed(2));
console.log("Millor client:", millorClient.nom, "-", millorClient.vendes);

// 4. Generar un nou CSV amb el resum
const resum = `Total,Mitjana,Millor client\n${vendesTotals},${mitjana.toFixed(2)},${millorClient.nom}`;
fs.writeFileSync("resum.csv", resum);
console.log("\nFitxer 'resum.csv' generat correctament!");
