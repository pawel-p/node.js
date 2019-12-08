const request = require("request");

const getWeatherInfo = function(url, name, allInfo) {
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      const weatherDzejson = JSON.parse(body);
      let dzejsonName = name;
      let temp = weatherDzejson.main.temp;
      allInfo(dzejsonName, weatherDzejson.weather, weatherDzejson.main.temp);
    } else {
      console.log("Weather not available");
    }
  });
};
module.exports = getWeatherInfo;
