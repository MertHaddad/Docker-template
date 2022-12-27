import express from "express";
import fs from "fs";

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) =>
  res.json({ message: "Hello from Nodejs Docker container" })
);

app.listen(port, () => {
  fs.writeFile(
    "./volumes_data/volumes_data/nodejs_log.txt",
    "Nodejs service started at: " + new Date().toLocaleString(),
    () => {}
  );
});
