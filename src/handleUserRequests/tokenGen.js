require("@dotenvx/dotenvx").config();
const jwt = require("jsonwebtoken");
/**
 * @type {import("jsonwebtoken").SignOptions}
 */
const options = {
  expiresIn: "1d",
  notBefore: 10,
};

/**
 *
 * @param {Object} userDetails
 */
function getToken(userDetails) {
  const token = jwt.sign(userDetails, process.env.PRIVATE_KEY, options);
  return token;
}

module.exports = { getToken };
