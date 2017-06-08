const { specs } = require("./scripts/util");
const path = require("path");

function questions(num) {
  const entry = {};
  specs().forEach(({ name, file }) => {
    entry[name] = file;
  });
  return entry;
}

const config = {
  entry: questions(5),
  output: {
    path: path.resolve(__dirname, "docs/specs"),
    filename: "[name].js"
  }
};

module.exports = config;
