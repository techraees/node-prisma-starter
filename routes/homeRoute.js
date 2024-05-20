// routes/home.js

import express from "express"
const router = express.Router();

// Define the route to render the home page
router.get("/home", (req, res) => {
  return res.render("layout/main-layout");
});

export default router;

