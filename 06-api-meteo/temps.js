async function obtenirDadesMeteo() {
  try {
    const resposta = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=42.5&longitude=1.52&current_weather=true",
    );
    const dades = await resposta.json();
    console.log("Temperatura actual:", dades.current_weather.temperature, "°C");
    console.log("Velocitat del vent:", dades.current_weather.windspeed, "km/h");
  } catch (error) {
    console.log("Error:", error.message);
  }
}

obtenirDadesMeteo();
