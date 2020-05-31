const router = require('express').Router();
const controller = require('./controller');

router.route('/providers').get(controller.getProviders);
router.route('/providers').post(controller.postProviders);
router.route('/providers').put(controller.updateProviders);
router.route('/providers').delete(controller.deleteProviders);

router.route('/distributors').get(controller.getDistributors);
router.route('/distributors').post(controller.postDistributors);
router.route('/distributors').put(controller.updateDistributors);
router.route('/distributors').delete(controller.deleteDistributors);

module.exports = router;
