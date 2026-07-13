function planificaEntreno(temps) {
  if (temps === "sol") {
    return "Surto en bici";
  } else if (temps === "pluja") {
    return "Vaig al gimnàs";
  } else if (temps === "vent") {
    return "Surto a córrer";
  } else if (temps === "nuvols") {
    return "Vaig a la muntanya";
  } else {
    return "No sé quin temps fa, revisa la previsió";
  }
}

console.log(planificaEntreno("sol"));
console.log(planificaEntreno("pluja"));
console.log(planificaEntreno("vent"));
console.log(planificaEntreno("nuvols"));
