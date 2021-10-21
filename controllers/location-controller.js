const Location = require("../models/location-model")
const mongoose = require("mongoose")

exports.postAddLocation = async(req, res) => {
    var get_city = req.body.city;
    
    // Check if it already exists!
    const location_exists = await Location.findOne({city: get_city}).exec()

    if(location_exists.length == 0) {
        // No existe
        const elemento = new Location(req.body)
        elemento._id = new mongoose.Types.ObjectId()
        try {
            //Agregar el documento a la colección
            await elemento.save()
            console.log(elemento)
            console.log("Location saved!")
            res.send({operacion:"correcta"})
        } catch(err) {
            console.log(err)
            res.send({operacion: "incorrecta"})
        }
    } else {
        try{
            await Location.findOneAndUpdate(get_city, {$inc: {interest_counter: 1}})
            console.log("Updated interest!")
            res.json({operacion: "correcta"})
        }catch(err){
            console.log(err)
            res.json({operacion: "incorrecta"})
        }
        console.log("This location is already registered. So its interest level has been updated!")
    }
    
}

exports.getLocations = async(req, res) => {
    const elem = await Location.find()
    console.log(elem)
    res.json(elem)
}