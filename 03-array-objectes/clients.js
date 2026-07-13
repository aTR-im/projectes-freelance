const clients = [
  { nom: "Marc", vendes: 250 },
  { nom: "Anna", vendes: 80 },
  { nom: "Joan", vendes: 400 },
  { nom: "Laia", vendes: 60 },
  { nom: "Pere", vendes: 150 },
  { nom: "Nuri", vendes: 30 },
  { nom: "Oriol", vendes: 500 },
  { nom: "Berta", vendes: 90 },
  { nom: "Xavi", vendes: 210 },
  { nom: "Clara", vendes: 45 },
];

const clientsBons = clients.filter((c) => c.vendes > 100);
const nomsBons = clientsBons.map((c) => `${c.nom}: ${c.vendes}€`);
console.log(nomsBons);

const total = clients.reduce((acumulat, c) => acumulat + c.vendes, 0);
console.log("Total de vendes:", total);
