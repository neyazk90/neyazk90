
const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./utils/constant');


const sellerRoute = require('./Routes/seller');
const app = express();

app.use(sellerRoute); //'/api/v1',

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error)
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An error occured!' });
})




app.listen(PORT, () => { 
    console.log('listening on port',PORT)
});
