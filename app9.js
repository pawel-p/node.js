const request = require("request");
const argv = require("yargs").argv;
const id = argv.id;

const idUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
const getUserInfo = require("./userw");
const getWeatherInfo = require("./weather");
const allInfo = require("./allInfo");
