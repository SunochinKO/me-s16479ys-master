const path = require("path");
const fs = require("fs");

const specDir = path.resolve("./src/specs");

function specFiles() {
  const pattern = /^\d+_spec\.js$/;
  return fs.readdirSync(specDir).filter(name => name.match(pattern))
}

function specs() {
  return specFiles().map(name => name.split("_"))
    .map(list => {
      const [id,] = list;
      return {
        id: id,
        name: `spec${id}`,
        file: `./src/specs/${id}_spec.js`
      };
    });
}

function format(num) {
  return ("00" + num).slice(-2);
}

module.exports = {
  specs: specs,
  specFiles: specFiles,
  format: format,
};