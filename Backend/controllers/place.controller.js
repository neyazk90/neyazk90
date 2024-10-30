const { v4: uuidv4 } = require('uuid');

const HttpError = require("../models/http-error");
const { DUMMY_DATA } = require("../utils/constant");



const getPlaceById = (req, res, next) => {
    const placeID = req.params.pid;
    const place = DUMMY_DATA.find(place => place.id == placeID);
    if (!place) { 
        throw new HttpError('could not found place with id ',404)
    }
    res.json({ place });
}

const getPlaceByUserId = (req, res, next) => {
    const userID = req.params.uid;
    const user = DUMMY_DATA.filter(place => place.creator == userID);

    if (!user) { 
        return next(new HttpError('Could not find User',404));
    }
    res.json({ data: user });
}

const createPlace = (req, res, next) => { 
    const {name, description, address, coordinates, creator } = req.body;
    const createdPlace = {
        id: uuidv4(),
        name: name,
        description: description,
        address: address,
        location: coordinates,
        creator
    };

    DUMMY_DATA.push(createdPlace); // unshift if you want to push at start

    res.status(201).json({ place: createdPlace });
}

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;