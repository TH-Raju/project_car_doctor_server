const express = require('express');
const router = express.Router();
const productOrderController = require('../controller/productOrder.controller')

router.route('/').get(productOrderController.getProductOrder)
router.route('/').post(productOrderController.postProductOrder)
router.route('/:id').delete(productOrderController.deleteProductOrder)
router.route('/:id').patch(productOrderController.patchProductOrder)



module.exports = router;