const express = require('express');
const knex = require('knex');

const router = express.Router();

// const carsDB = require('../data/car-dealer.db3');

const carsDB = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/car-dealer.db3'
  },
  useNullAsDefault: true
});

// get all cars
router.get('/', (req, res) => {
  carsDB('cars')
    .then(cars => {
      res.json(cars);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'Error getting all cars', error });
    })
})

router.post('/', (req, res) => {
  const carData = req.body;
  carsDB('cars')
    .insert(carData)
    .then(ids => {
      carsDB('cars')
      .where({ id: ids[0] })
      .then(newCar => {
        res.status(201).json(newCar);
      })
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'Error posting a new car', error });
    })
})

module.exports = router;
