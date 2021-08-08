const router = require('express').Router();
const controllerDataSelect = require('./controller');

router.get('/Countries', controllerDataSelect.getCountries);
router.get('/State/:CountrieId', controllerDataSelect.getState);
router.get('/City/:StateId', controllerDataSelect.getCitys);

module.exports = router;
