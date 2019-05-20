const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/flights',
{useNewUrlParser: true})

var db = mongoose.connection
db.on('connected', ()=> {
    console.log('Connected to MongoDB');
})