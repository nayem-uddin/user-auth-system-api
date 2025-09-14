const { Model } = require("sequelize");
const {
  getEncryptedPassword,
} = require("../handleUserRequests/handlePassEncrypt");
const { User } = require("./models");

/**
 *
 * @param {string} email
 */
async function findUserByEmail(email) {
  const userData = await User.findOne({
    where: { email: email },
  });
  return userData?.get({ plain: true });
}

/**
 *
 * @param {Object} userDetails
 */
async function insertNewUser(userDetails) {
  const password = getEncryptedPassword(userDetails.password);
  Object.assign(userDetails, { password });
  await User.create(userDetails);
}

/**
 *
 * @param {string} id
 * @param {object} updatedInfo
 */

async function updateUserInfo(id, updatedInfo) {
  await User.update(updatedInfo, { where: { id } });
  const userData = await User.findByPk(id);
  return userData.get({ plain: true });
}

module.exports = { findUserByEmail, insertNewUser, updateUserInfo };
