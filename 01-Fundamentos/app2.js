const fs = require("fs");

const data = fs.readFileSync("readme.md", "utf-8");

console.log(data);
