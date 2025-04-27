const express = require("express");
const {
  getAllUser,
  getOneUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
} = require("../controllers/user.controllers");
const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getOneUser);
router.post("/", CreateUser);
router.put("/:id", UpdateUser);
router.delete("/:id", DeleteUser);

module.exports = router;
