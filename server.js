// Import required modules
import express from "express"
import fileUpload from "express-fileupload"
import dotenv from "dotenv"
dotenv.config()
import path from "path"

// Create an Express application
const app = express();

// Middleware for parsing request bodies (optional)
app.use(express.static("public"));
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets

// Routes
import userRoute from "./routes/userRoute.js"
import homeRoute from "./routes/homeRoute.js"

app.use("/api", homeRoute);
app.use("/api/user", userRoute);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
