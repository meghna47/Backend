const fs = require("fs");
let list = fs.readdirSync("./src/models/");

for (let fileName of list) {
  if (fileName == "index.js") continue;

  module.exports[`${fileName.replace(`.js`, ``)}`] = require(`./` + fileName);
}
/*
fs.readdirSync("./src/models").forEach((fileName) => {
  if (fileName === "index.js") return;

  module.exports[`${fileName.replace(`.js`, ``)}`] = require(fileName);
});
*/

//module.exports = list.filter(f => f!="index.js").map(f => `${f.replace(`.js`, ``)}`)
