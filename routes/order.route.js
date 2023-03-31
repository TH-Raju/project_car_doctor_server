const express = require('express');
const router = express.Router();
const orderController = require('../controller/order.controller')

router.route('/').get(orderController.getOrder)
router.route('/').post(orderController.postOrder)
router.route('/:id').delete(orderController.deleteOrder)
router.route('/:id').patch(orderController.patchOrder)

module.exports = router;