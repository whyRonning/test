const express = require("express");
const config = require("config");
const path = require("path");
const cors = require("cors")
const app = express();
app.use(express.json({ extended: true }));
app.use(cors())
app.use("/api", require("./Routes/Message"));
if (process.env.Node_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "front", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "front", "build", "index.html"));
  });
}
const Port = config.get("port") || 3000;
app.listen(Port, () => console.log(Port));
