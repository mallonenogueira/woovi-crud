import { app } from "./app";
import mongoose from "mongoose";

const url = "mongodb://localhost:27017/develop";

mongoose.connect(url, {
  user: "user-develop",
  pass: "password-develop",
});

mongoose.connection.once("open", () => {
  console.log(`Connected to mongo at ${url}`);

  app.listen(3000, () => {
    console.log("listen: 3000");
  });
});
