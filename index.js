// inlcude express
const express = require("express");

//googleapis
const { google } = require("googleapis");

//initilize express
const app = express();

//set app view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.render("index", { titulo: "My page" });
});

app.post("/", async (req, res) => {
  const nombre = req.body.nombre;
  const correo = req.body.telefono;
  const titulo = req.body.titulo;

  let fecha = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZoneName: "short",
  };

  let fecharegistro =
    fecha.toLocaleDateString("es-MX", options) +
    " " +
    fecha.toLocaleTimeString("es-MX");

  if (!nombre || !correo || !titulo) {
    return res.sendStatus(400);
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: "keys.json", //the key file
    //url to spreadsheets API
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  //Auth client Object
  const authClientObject = await auth.getClient();

  //Google sheets instance
  const googleSheetsInstance = google.sheets({
    version: "v4",
    auth: authClientObject,
  });

  // spreadsheet id
  const spreadsheetId = "1sWKRl0ojc0tn8r02fmGjVHjaZEWbBHnFu2stl-Bey94";

  try {
    await googleSheetsInstance.spreadsheets.values.append({
      auth, //auth object
      spreadsheetId, //spreadsheet id
      range: "A:C", //sheet name and range of cells
      valueInputOption: "USER_ENTERED", // The information will be passed according to what the usere passes in as date, number or text
      resource: {
        values: [[nombre, correo, titulo, fecharegistro]],
      },
    });

    res.render("exito");
  } catch (error) {
    res.status(500).render("fallo", { titulo: "My page" });
    console.error(error);
  }
});

app.get("/download", async (req, res) => {
  res.download("./public/assets/IPP_Celestin_ReforcePharma.pdf");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
