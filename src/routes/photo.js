const express = require("express");
const router = express.Router();
const {PhotoController} = require('../controller/photo')
const upload = require("../middleware/upload")

router.post('/before',upload,PhotoController.photoBefore)
router.post('/after',upload,PhotoController.photoAfter)


module.exports = router;