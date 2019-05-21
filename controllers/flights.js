var Flight = require('../models/flight');
var Ticket = require('../models/ticket');



module.exports = {
    index,
    show,
    new: newFlight,
    create,
    createTicket
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

function createTicket(req, res, next) {
    var seat = req.body.seat;
    var price = req.body.price;
    var flight = req.params.id;
    var ticket = new Ticket({seat: req.body.seat, price: req.body.price, flight: req.params.id});
    ticket.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect(`/flights/${req.params.id}`);
        console.log(ticket);
    });
};