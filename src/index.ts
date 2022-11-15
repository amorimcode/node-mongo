import express from "express";
import mongoose from "mongoose";
import { router } from "./router";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = express();
    const port = 3001;

    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port} 🚀`);
    });
  })
  .catch((err) => console.log("could not connect to mongodb", err));
