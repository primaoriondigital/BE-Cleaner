const express = require("express");
const router = express.Router();
const {PhotoController} = require('../controller/photo')
const upload = require("../middleware/upload")

router.post('/cleaner',upload,PhotoController.photoCleaner)
router.post('/before',upload,PhotoController.photoBefore)
router.post('/after',upload,PhotoController.photoAfter)
router.get('/:status/:order',PhotoController.getPhoto)

module.exports = router;