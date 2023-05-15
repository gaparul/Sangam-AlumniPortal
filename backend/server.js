const express = require("express");
const bodyParser=require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const logger = require('../backend/logger');

const app = express();

dotenv.config();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.send("Alumni Portal Backend Mongodb");
});
// MongoDb connection
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) {
      logger.error(err);
    } else {
      logger.info("Database Connected");
    }
  }
);

// routes
const auth=require("./routes/auth");
const admin=require("./routes/admin");



//routes use
app.use("/api/auth/", auth);
app.use("/api/admin",admin);


app.listen(process.env.PORT, () => {
  logger.info("Server started at port " + process.env.PORT);
});
