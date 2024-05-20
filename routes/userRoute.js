
import express from "express"
const router = express.Router();

import {
  getAllUsers,
  deleteSingleUser,
  updateUserProfile,
  getSingleUser,
  createNewUser,
} from "../controllers/userCtrl.js"

router.route("/").get().post();
router.route("/:id").put().delete().get();

export default router;
