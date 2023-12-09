
const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const imageContr = require('../imageController/image');


const router = express.Router();

router.get("/images/:filename", imageContr.getImageUrl);
router.get("/posts", imageContr.getUploadedImage);

router.post("/posts", upload.single('image'), imageContr.newImageUpload)
router.delete("/posts/:id", imageContr.delImage)
module.exports = router;