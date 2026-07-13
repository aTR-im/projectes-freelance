async function obtenirUsuariGithub() {
  try {
    const resposta = await fetch("https://api.github.com/users/torvalds");
    const dades = await resposta.json();
    console.log("Nom:", dades.name);
    console.log("Seguidors:", dades.followers);
    console.log("Bio:", dades.bio);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

obtenirUsuariGithub();
