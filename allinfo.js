const request = require("request");
const fs = require("fs");

const allInfo = function(dzejsonname, temp) {
  const obj = {
    imie: dzejsonname,
    temperatura: temp
  };
  fs.writeFile("AllInfo.txt", `${obj.imie}: ${obj.temperatura} K`, function() {
    console.log("Info zapisano do pliku");
  });
};

module.exports = allInfo;
