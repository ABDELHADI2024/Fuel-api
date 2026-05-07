
const cron = require("node-cron");

cron.schedule("*/15 * * * *", async () => {
  console.log("Updating fuel prices...");
});
