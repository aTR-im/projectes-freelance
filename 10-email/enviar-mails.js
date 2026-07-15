require("dotenv").config();
const fs = require("fs");
const { parse } = require("csv-parse/sync");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USUARI,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const contingut = fs.readFileSync("contactes.csv", "utf-8");
const contactes = parse(contingut, {
  columns: true,
  skip_empty_lines: true,
});

// ⬇️ AQUESTA FUNCIÓ HA D'ESTAR DEFINIDA ABANS DE FER-LA SERVIR ⬇️
function generaMissatge(contacte) {
  if (contacte.estat === "pendent") {
    return {
      subject: `Recordatori: cita el ${contacte.data}`,
      html: `<p>Hola ${contacte.nom},</p>
             <p>Et recordem que tens hora reservada per a <b>${contacte.servei}</b>
             el dia <b>${contacte.data}</b> a les <b>${contacte.hora}</b>.</p>
             <p>Si necessites canviar-la, contacta amb nosaltres.</p>`,
    };
  } else if (contacte.estat === "realitzat") {
    return {
      subject: `Factura pel servei del ${contacte.data}`,
      html: `<p>Hola ${contacte.nom},</p>
             <p>Gràcies per la teva visita! Aquí tens el resum del servei:</p>
             <ul>
               <li>Servei: ${contacte.servei}</li>
               <li>Data: ${contacte.data}</li>
               <li>Preu: ${contacte.preu}€</li>
             </ul>`,
    };
  } else {
    return null;
  }
}

async function enviarEmails() {
  for (const contacte of contactes) {
    const missatge = generaMissatge(contacte);

    if (!missatge) {
      console.log(`⚠️ Estat desconegut per a ${contacte.nom}, no s'envia res`);
      continue;
    }

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USUARI,
        to: contacte.email,
        subject: missatge.subject,
        html: missatge.html,
      });
      console.log(`✅ Email (${contacte.estat}) enviat a ${contacte.nom}`);
    } catch (error) {
      console.log(`❌ Error enviant a ${contacte.nom}:`, error.message);
    }
  }
}

enviarEmails();
