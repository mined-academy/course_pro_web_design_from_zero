const fs = require("fs");
const Mustache = require("mustache");

const view = {
    title: "My Shopping List",
    items: ["1", "2", "3", "4", "5", "6", "7", "8"],
    name: "Luis A. Vásquez",
    profession: "Web Developer",
};

const template = fs.readFileSync("template.mustache", "utf8");
const output = Mustache.render(template, view);
fs.writeFileSync("index.html", output);
