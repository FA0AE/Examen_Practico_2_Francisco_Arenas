const router = require("express").Router()
const location_controller = require("../location-controller")

router.post('/agregarUbicacion', location_controller.postAddLocation)
router.post('/actualizarInteres', location_controller.postUpdateInterest)
router.get('/obtenerUbicaciones', location_controller.getLocations)

module.exports = router