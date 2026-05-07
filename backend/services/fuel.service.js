
const axios = require("axios");

exports.fetchStations = async (lat, lon) => {
  const response = await axios.get(
    `https://api.2aaz.fr/stations?lat=${lat}&lon=${lon}&radius=10`
  );

  return response.data;
};
