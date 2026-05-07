
const fuelService = require("../services/fuel.service");

exports.getStations = async (req, res) => {
  try {
    const { lat, lon } = req.query;

    const stations = await fuelService.fetchStations(lat, lon);

    res.json(stations);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
