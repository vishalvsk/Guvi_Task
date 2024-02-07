const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json());

app.post("/create-file", (req, res) => {
  // Get current timestamp
  const timestamp = new Date().toISOString();

  // Create filename with current date-time
  const filename = `${timestamp.replace(/:/g, "-")}.txt`;

  // Define folder where the file will be created
  const folderPath = path.join(__dirname, "files");

  // Create folder if it doesn't exist
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  // Create file with current timestamp content
  fs.writeFile(path.join(folderPath, filename), timestamp, (err) => {
    if (err) {
      console.error("Error creating file:", err);
      res.status(500).send("Error creating file");
    } else {
      console.log("File created successfully:", filename);
      res.status(200).send("File created successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
