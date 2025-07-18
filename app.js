const express = require("express");
const app = express();
require("dotenv").config();


app.use(express.json());


require("./src/db/dbConnection");

app.get("/", (req, res) => {
  res.json({ message: "Hoş Geldiniz" });
});


const router = require("./src/routers");
app.use("/api", router);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server ${port} portundan çalışıyor...`);
});
