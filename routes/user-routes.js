const express = require("express");
const auth = require("../middleware/auth");
const { addUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", auth, addUser);

module.exports = {
  routes: router,
};
