const express = require('express');
const { DUMMY_DATA } = require('../utils/constant');
const HttpError = require('../models/http-error');

// const HttpError = 
const router = express.Router();



router.get('/:pid', (req, res, next) => {
    console.log('Pid',req.params.pid);
    const placeID = req.params.pid;
    const place = DUMMY_DATA.find(place => place.id == placeID);
    if (!place) { 
        throw new HttpError('could not found place with id ',404)
    }
    res.json({ place });
});

router.get('/user/:uid', (req, res, next) => {
    console.log(req.params.uid);
    const userID = req.params.uid;
    const user = DUMMY_DATA.filter(place => place.creator == userID);

    if (!user) { 
        return next(new HttpError('Could not find User',404));
    }
    res.json({ data: user });
});


module.exports = router;