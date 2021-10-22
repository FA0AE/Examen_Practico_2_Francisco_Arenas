const Location = require("../models/location-model")
const mongoose = require("mongoose")

exports.postAddLocation = async(req, res) => {
    const get_city = req.body.city;
    
    // Check if it already exists!
    const location_exists = await Location.findOne({city: get_city}).exec()

    if (location_exists == null) {
        // Then... it does not exist
        const new_location = new Location(req.body)
        new_location._id = new mongoose.Types.ObjectId()

        try {
            // Add document to the collection
            await new_location.save()
            console.log("Location saved correctly!")
            res.send({status:"Document Saved"})
        } catch(err) {
            console.log(err)
            res.send({status: "Error while saving document!"})
        }
    } else {
        // It does exist, thus, increment interest level
        try {
            await Location.findOneAndUpdate({city: get_city}, {$inc: {interest_counter: 1}})
            console.log("This location is already registered. So its interest level has been updated!")
            res.json({status: "Document updated correctly!"})
        } catch(err) {
            console.log(err)
            res.json({status: "Error while updating document!"})
        }
    }   
}

exports.getLocations = async(req, res) => {
    const get_country = req.body.country

    if (get_country == undefined) {
        // No country was specified in the get operation
        const complete_location_list = await Location.find()
        console.log(complete_location_list)
        res.json(complete_location_list)
    } else {
        // Show the locations from a specific country 
        const location_by_country = await Location.find({country: get_country}).exec()
        console.log(location_by_country)
        res.json(location_by_country)
    }
}