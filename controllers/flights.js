var Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
            flights
        });
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err) {
      //one way to handle erros in express
      if (err) return res.redirect('flights/new');
      console.log(flight);
      console.log(req.body);
       res.redirect('/flights');
    });
  }

function show(req, res) {
Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', {
        title: 'Flight Detail', flight
    });
    });
}