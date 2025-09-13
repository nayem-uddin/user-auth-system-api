const { Router } = require("express");
const { checkPassword } = require("./handlePassEncrypt");
const { insertNewUser, findUserByEmail } = require("../handleDB/queries");
const { UniqueConstraintError } = require("sequelize");
const { getToken } = require("./tokenGen");

const authRouter = Router();
authRouter.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userData = await findUserByEmail(email);
    if (!userData) {
      return res.status(404).send({ error: "User doesn't exist" });
    }
    const match = await checkPassword(userData.password, password);
    if (!match) {
      return res.status(401).send({ error: "Password mismatched" });
    }
    delete userData.password;
    const token = getToken(userData);
    res.status(200).send({ token });
  } catch (error) {
    next(error);
  }
});

authRouter.post("/signup", async (req, res, next) => {
  try {
    const userDetails = req.body;
    await insertNewUser(userDetails);
    res.status(201).send({ message: "Registered successfully" });
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      return res.status(409).send({ error: "Duplicate email found" });
    }

    next(error);
  }
});

module.exports = { authRouter };
