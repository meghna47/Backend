const fs = require("fs");

fs.readdirSync("./src/controllers").forEach((file) => {
  if (file === "index.js") return;

  module.exports[`${file.replace(`Controller.js`, ``)}`] = require(`./${file}`);
});
