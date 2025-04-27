const app = require("./app");
const config = require("./config/config")
const PORT = config.app.port;
const host = "0.0.0.0";

app.listen(PORT, host, () => {
  console.log(`server runing with on http://${host}:${PORT}`);
});
