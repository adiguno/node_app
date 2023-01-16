const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("got something, logging it");
  console.log(req);
  res.send("Hello from App Engine 2!");
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
