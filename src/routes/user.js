const express = require("express");
const router = express.Router();
const {UsersController} = require("../controller/user")

router.post("/login",UsersController.login)
router.post("/register",UsersController.register)
router.get("/rating/:id",UsersController.getRating)
router.get("/all-cleaner",UsersController.getAll)

module.exports = router;