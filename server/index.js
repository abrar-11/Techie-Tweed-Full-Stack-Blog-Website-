import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import blogRoutes from "./routes/blogRoutes.js";
import "colors";
import db from "./config/db.js";


dotenv.config();

db.connect(function (err) {
   if (err) throw err;
   console.log("Connected!");
});


const port = process.env.PORT || 5000;
const app = express();

app.use(express.json())
app.use("/api/v1/blogs", blogRoutes);

app.listen(port, () =>
   console.log("Server is listening on port".underline.cyan)
);
