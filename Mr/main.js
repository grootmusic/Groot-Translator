const fs = require('fs');
const path = require('path');

function requireFiles(dir, exportsObject) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const fileStat = fs.statSync(filePath);

    if (fileStat.isFile() && file.endsWith('.js') && file !== 'main.js') {
      const fileName = file.slice(0, -3); // Remove the '.js' extension
      exportsObject[fileName] = require(filePath);
    } else if (fileStat.isDirectory()) {
      const subdirExports = {};
      requireFiles(filePath, subdirExports);
      exportsObject[file.toLowerCase()] = subdirExports;
    }
  });
}

const exportsObject = {};
requireFiles(__dirname, exportsObject);

module.exports = exportsObject;