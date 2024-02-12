const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello, this is a basic vishal Express.js app!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
