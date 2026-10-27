// Loads .env into process.env, then reads the settings the app needs.
require("dotenv").config();
const minimist = require("minimist");
const ms = require("ms");

function settings(argv) {
  const args = minimist(argv, { default: { timeout: process.env.TIMEOUT || "5s" } });
  return { timeout: ms(args.timeout), verbose: Boolean(args.verbose) };
}

module.exports = { settings };
