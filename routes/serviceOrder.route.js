const express = require('express');
const router = express.Router();
const serviceOrderController = require('../controller/serviceOrder.controller')

router.route('/').get(serviceOrderController.getserviceOrder)
router.route('/').post(serviceOrderController.postserviceOrder)
router.route('/:id').delete(serviceOrderController.deleteserviceOrder)
router.route('/:id').patch(serviceOrderController.patchserviceOrder)

module.exports = router;