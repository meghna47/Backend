const fs = require("fs");

fs.readdirSync("./src/services").forEach((file) => {
  if (file === "index.js") return;

  module.exports[`${file.replace(`Services.js`, ``)}`] = require(`./${file}`);
});
