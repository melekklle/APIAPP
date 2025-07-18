const mongoose = require("mongoose")

mongoose.connect(process.env.DB_URL)
  .then(() => {
    console.log("Veri tabanına bağlandı");
  })
  .catch((err) => {
    console.log("Veri tabanına bağlanamadı:", err);
  });