// const fs = require("fs");
const request = require("request");
const argv = require("yargs").argv;
// const city = argv.city;
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.argv}&APPID=0ed761300a2725ca778c07831ae64d6e`;

// request(url, function(err, res, body) {
//   let json = JSON.parse(body);
//   console.log(json.main.temp);
// });

// const request = require ('request');

// const url = `https://jsonplaceholder.typicode.com/users/2`;

// request(url, function(err, res, body) {
//   let json = JSON.parse(body);
//   if (res.statusCode === 200) {
//     console.log(json.name);
//     console.log(`lat${json.address.geo.lat}`);
//     console.log(`lng${json.address.geo.lng}`);
//   } else {
//     console.log("cos jest nie tak z Twoim użytkownikiem");
//   }
// });
// zad 6
// const userId = argv.id;
// const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

// request(url, function(err, res, body) {
//   if (!err && res.statusCode === 200) {
//     const json = JSON.parse(body);
//     console.log(json.name);
//     console.log(`lat ${json.address.geo.lat}`);
//     console.log(`lng ${json.address.geo.lng}`);
//   } else {
//     console.log("cos jest nie tak z Twoim użytkownikiem");
//   }
// });

// const request = require("request");
// const argv = require("yargs").argv;
// zad 7/8

const id = argv.id;
const idUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
request(idUrl, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    const dzejson = JSON.parse(body);
    console.log((UserName = dzejson.name));
    console.log(`lat  ${dzejson.address.geo.lat}`);
    console.log(`lng  ${dzejson.address.geo.lng}`);

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${dzejson.address.geo.lat}&lon=${dzejson.address.geo.lng}`;
    request(weatherUrl, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        const weatherDzejson = JSON.parse(body);
        console.log(
          weatherDzejson.weather,
          weatherDzejson.main,
          weatherDzejson.wind
        );
      } else {
        console.log("Weather not available");
      }
    });
  } else {
    console.log("User not found");
  }
});

// fs.writeFile('user.json', dzejson,weatherDzejson, (error) => {
//   if (error) {
//       console.log('błąd zapisu do pliku');
//   } else {
//       console.log('plik został zapisany');
//   }
// });
