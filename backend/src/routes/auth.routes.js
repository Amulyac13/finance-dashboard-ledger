const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/register", authController.userRegisterController);

router.post("/login", authController.userLoginController);

// when user logs out, we can clear the cookie and blacklist the token in the database for future validation.
router.post("/logout", authController.userLogoutController);

module.exports = router;
