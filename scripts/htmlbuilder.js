const TEMPLATE = "templates/ex.html";
const DEST = "../docs";

const { specs, format } = require("./util");

const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

function main() {
  const templateFile = path.resolve(__dirname, TEMPLATE);
  const template = fs.readFileSync(templateFile, "utf-8");
  const destdir = path.resolve(__dirname, DEST);

  const list = specs();
  list.forEach(exercise => {
    exercise.all = list;
    const html = ejs.render(template, exercise);
    const filename = `ex${exercise.id}.html`;
    const fullpath = path.join(destdir, filename);
    fs.writeFileSync(fullpath, html);
  });
}

main();