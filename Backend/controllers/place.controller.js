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

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;