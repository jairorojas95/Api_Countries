const router = require('express').Router();
const controllerDataSelect = require('./controller');

router.get('/Countries', controllerDataSelect.getCountries);
router.get('/State/:idCountrie', controllerDataSelect.getState);
router.get('/City/:idState', controllerDataSelect.getCitys);

module.exports = router;
