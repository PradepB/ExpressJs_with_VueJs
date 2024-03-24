const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "..", ".env.server")
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/api/items", require("./routes/items"));

require('./routes')(app);

if (process.env.NODE_ENV === 'development') {
  require('./dev-routes')(app);
}

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ----${port}`);
});
