const app = require("./app");
const config = require("./config/config")
const PORT = config.app.port;
const host = "127.0.0.1";

app.listen(PORT, host, () => {
  console.log(`server runing with on http://${host}:${PORT}`);
});
