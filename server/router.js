const router = require('express').Router();
const controller = require('./controller');

router.route('/providers').get(controller.getProviders);

router.route('/providers').post(controller.postProviders);

module.exports = router;
