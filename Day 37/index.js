const { writeFile } = require("node:fs/promises");
const { readFile } = require("node:fs/promises");

async function createAndWriteDataIntoFile(curr_date = new Date()) {
  try {
    var fileData = {
      date: curr_date.getDate(),
      hour: curr_date.getHours(),
      minutes: curr_date.getMinutes(),
    };
    await writeFile(
      `${fileData.date}-${fileData.hour}-${fileData.minutes}.txt`,
      curr_date.toString()
    );
  } catch (err) {
    console.error(err);
  }
}

createAndWriteDataIntoFile(new Date());

// Reading a file:
async function readDataFromFile() {
  try {
    const result = await readFile("./27-13-32.txt");
    console.log(result.toString());
  } catch (error) {
    console.log(error);
  }
}
readDataFromFile();
