require("dotenv").config({ path: ".env" });
const cors = require("cors");
const jwt = require("jsonwebtoken");

const createServer = require("./createServer");
const server = createServer();

server.express.use(async (req, res, next) => {
  const token = req.headers["authorization"];
  if (token) {
    try {
      const { userId } = await jwt.verify(token, process.env.APP_SECRET);
      req.userId = userId;
    } catch (err) {
      console.error("VERIFY JWT TOKEN");
    }
  }
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => console.log(`Server is running on http://localhost:${deets.port} 🚀`)
);
