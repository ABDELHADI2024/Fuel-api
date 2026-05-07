
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const stationsRoutes = require("./routes/stations.routes");
require("./cron/updatePrices");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/stations", stationsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
