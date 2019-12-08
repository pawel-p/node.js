const request = require("request");

const getUserInfo = function(url, weatherInfo, allInfo) {
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      const dzejson = JSON.parse(body);
      let dzejsonName = dzejson.name;
      let lat = dzejson.address.geo.lat;
      let lng = dzejson.address.geo.lng;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
      weatherInfo(weatherUrl, dzejsonName, allInfo);
    } else {
      console.log("User not found");
    }
  });
};
module.exports = getUserInfo;

// const request = require("request");

// const userInfo = function(url, weatherInfo, saveInfo) {
//   request(url, function(error, response, body) {
//     if (response.statusCode === 200) {
//       let json = JSON.parse(body);
//       let userName = json.name;
//       let lat = json.address.geo.lat;
//       let lng = json.address.geo.lng;
//       const urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
//       console.log(json.name);
//       weatherInfo(urlWeather, userName, saveInfo);
//     } else if (response.statusCode !== 200) {
//       console.log("User not found");
//     }
//   });
// };

// module.exports = userInfo;
