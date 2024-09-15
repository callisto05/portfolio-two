const express = require('express');
const router = express.Router();

// Import the example controller
const exampleController = require('../controllers/exampleController');

// Define routes
router.get('/example', exampleController.getExample);
router.post('/example', exampleController.createExample);
router.put('/example/:id', exampleController.updateExample);
router.delete('/example/:id', exampleController.deleteExample);

module.exports = router;