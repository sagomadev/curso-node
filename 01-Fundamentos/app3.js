/*
Dado el siguiente ejemplo, encuentre el numero de 
veces que se repite la palabra "React" en el archivo
*/

const fs = require("fs");

// Lee el archivo
const content = fs.readFileSync("readme.md", "utf-8");

// Separa el string en un array de palabras a partir de los espacios
const wordCount = content.split(" ").length;

// ToDo: Cuenta el numero de veces que se repite la palabra "React" en el archivo
