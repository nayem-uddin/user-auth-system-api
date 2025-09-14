const { Router } = require("express");
const { updateUserInfo } = require("../handleDB/queries");
const { getToken } = require("./tokenGen");

const updateRouter = Router();

updateRouter.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const updatedInfo = await updateUserInfo(id, userData);
    const token = getToken(updatedInfo);
    res.status(200).send({ token });
  } catch (error) {
    next(error);
  }
});

module.exports = { updateRouter };
