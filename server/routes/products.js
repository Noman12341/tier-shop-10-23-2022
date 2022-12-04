const express = require('express');
const router = express.Router();
const upload = require("../middlewares/multer");

// const auth = require('../middleware/auth');
const { getProducts, postProducts } = require('../controllers/products');

router.get('/:page', getProducts);
router.post('/',upload.single("photo"), postProducts);

module.exports = router;