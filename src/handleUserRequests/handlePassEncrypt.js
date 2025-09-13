const { hashSync, compare } = require("bcryptjs");

require("@dotenvx/dotenvx").config();

/**
 *
 * @param {string} password
 */
function getEncryptedPassword(password) {
  const hash = hashSync(password, Number(process.env.ROUNDS));
  return hash;
}

async function checkPassword(hashedPassword, givenPassword) {
  const isEqual = await compare(givenPassword, hashedPassword);
  return isEqual;
}

module.exports = { getEncryptedPassword, checkPassword };
