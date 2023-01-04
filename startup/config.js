"use strict";

const config = require("config");

module.exports = () => {
  if (!config.get("jwtPrivateKey")) {
    throw new Error("Fatal : jwtPrivateKey not defined");
  }
};
