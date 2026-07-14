# Processador de dades CSV

Script en Node.js que llegeix un fitxer CSV amb dades de clients i genera automàticament un resum amb estadístiques clau.

## Què fa

- Llegeix un fitxer `clients.csv` (nom, email, vendes)
- Calcula el total de vendes, la mitjana i el millor client
- Genera un fitxer `resum.csv` amb els resultats

## Cas d'ús real

Útil per a pymes que gestionen les seves dades en Excel/CSV i necessiten informes automàtics sense haver de fer els càlculs manualment cada cop.

## Com fer-lo servir

1. Instal·la les dependències: `npm install`
2. Substitueix `clients.csv` per les teves pròpies dades (mateix format de columnes)
3. Executa: `node processador.js`
4. Consulta el resultat a `resum.csv`

## Tecnologies

Node.js, csv-parse
