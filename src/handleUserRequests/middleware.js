/**
 *
 * @param {Error} err
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
function handleUnknownError(err, req, res, next) {
  res.status(500).send({ error: err.message ?? "Internal server error" });
}

module.exports = { handleUnknownError };
