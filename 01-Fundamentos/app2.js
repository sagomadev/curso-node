const fs = require("fs");

// Leemos el archivo readme.md
const data = fs.readFileSync("readme.md", "utf-8");

// Reemplazamos la palabra React por Angular
const newData = data.replace(/React/gi, "Angular");

// Escribimos el archivo readme-angular.md
fs.writeFileSync("readme-angular.md", newData);
