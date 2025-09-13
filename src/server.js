require("@dotenvx/dotenvx").config();

const { createServer } = require("http");
const { app } = require("./app");
const { connectionPool } = require("./handleDB/connectDB");

const server = createServer(app);
server.listen(process.env.PORT || 5000, async () => {
  try {
    await connectionPool.authenticate();
    await connectionPool.sync();
    console.log("Database connected successfully");
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
  } catch (error) {
    console.log(error);
  }
});
