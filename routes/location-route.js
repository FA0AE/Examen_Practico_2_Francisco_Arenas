const router = require("express").Router()
const location_controller = require("../controllers/location-controller")

router.post('/agregarUbicacion', location_controller.postAddLocation)
router.get('/obtenerUbicaciones', location_controller.getLocations)

module.exports = router