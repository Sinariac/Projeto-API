const Sequelize = require("sequelize");
const config = require("../config/config");

const SalaCinema = require("../models/SalaCinema.js")
const connection = new Sequelize(config);

SalaCinema.init(connection);

module.exports = connection
