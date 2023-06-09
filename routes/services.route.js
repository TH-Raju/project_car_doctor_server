const express = require('express')
const router = express.Router();
const carController = require("../controller/services.controller.js");

router.route('/').get(carController.getServices)
router.route('/:id').get(carController.getSingleServices)


module.exports = router;