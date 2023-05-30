const express = require("express");
const router = express.Router();
const {UsersController} = require("../controller/user")

router.post("/login",UsersController.login)
router.post("/register",UsersController.register)
router.post("/signup",UsersController.register1)
router.get("/rating/:id",UsersController.getRating)
router.get("/all-cleaner",UsersController.getAll)
router.get("/cleaner-detail/:id",UsersController.getId)

module.exports = router;