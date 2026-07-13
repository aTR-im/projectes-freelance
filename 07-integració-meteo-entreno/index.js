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

function tradueixTempsAPI(weathercode, windspeed) {
  // El vent mana per sobre de tot: si fa molt vent, prioritzem córrer
  if (windspeed > 20) {
    return "vent";
  }
  // Codis de pluja/tempesta d'Open-Meteo
  if (
    [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99].includes(
      weathercode,
    )
  ) {
    return "pluja";
  }
  // Codi 0 = cel completament clar
  if (weathercode === 0) {
    return "sol";
  }
  // Codis 1,2,3 = parcialment ennuvolat / cobert, i boira (45,48)
  return "nuvols";
}

async function planificaSegonsElTempsReal() {
  try {
    const resposta = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=42.5&longitude=1.52&current_weather=true",
    );
    const dades = await resposta.json();

    const temperatura = dades.current_weather.temperature;
    const vent = dades.current_weather.windspeed;
    const codi = dades.current_weather.weathercode;

    const categoria = tradueixTempsAPI(codi, vent);

    console.log(
      `Temperatura: ${temperatura}°C | Vent: ${vent} km/h | Codi meteo: ${codi}`,
    );
    console.log("Categoria detectada:", categoria);
    console.log("Pla d'avui:", planificaEntreno(categoria));
  } catch (error) {
    console.log("Error:", error.message);
  }
}

planificaSegonsElTempsReal();
