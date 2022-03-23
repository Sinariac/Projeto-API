const express = require("express");
const routes = require("./routes");
require("./database");
const port = 3000;
const app = express();
app.use(express.json());
routes(app)
app.listen(port, () => {
  console.log(`API iniciou em porta ${port}`);
});
module.exports = app;
