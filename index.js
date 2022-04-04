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
  const correo = req.body.correo;
  const titulo = req.body.titulo;

  let fecha = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  fecha.toLocaleDateString("default", options);

  let fecharegistro =
    fecha.toLocaleDateString("default", options) +
    " " +
    fecha.toLocaleTimeString("default");

  if (!nombre && !correo && !titulo) {
    res.sendStatus(400);
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
  const spreadsheetId = "18OU1c8WvlrTXVgJUTTl7H7Db2jhHI0Li3Npz873pkYs";

  try {
    await googleSheetsInstance.spreadsheets.values.append({
      auth, //auth object
      spreadsheetId: "asdf", //spreadsheet id
      range: "A:C", //sheet name and range of cells
      valueInputOption: "USER_ENTERED", // The information will be passed according to what the usere passes in as date, number or text
      resource: {
        values: [[nombre, correo, titulo, fecharegistro]],
      },
    });

    res.render("exito", { titulo: "My page" }).sendStatus(200);
  } catch (error) {
    res.render("fallo", { titulo: "My page" }).sendStatus(500);
    console.error(error);
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening on http://localhost:5000`);
});
