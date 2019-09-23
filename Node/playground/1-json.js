const fs = require("fs");

// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);

// const book = JSON.parse(fs.readFileSync("1-json.json"));
// console.log(book.title);
// console.log(fs.readFileSync("1-json.json").toString());

const dude = JSON.parse(fs.readFileSync("1-json.json"));
dude.name = "Savo";
dude.age = 23;
fs.writeFileSync("1-json.json", JSON.stringify(dude));