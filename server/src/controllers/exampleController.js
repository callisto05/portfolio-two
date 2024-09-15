// exampleController.js

// Example controller for handling the logic for the example route

// Example route handler
// const exampleHandler = (req, res) => {
//   // Handle the example route logic here
//   res.send('Hello from the example route!');
// };

// Example controller for handling the logic for the example route

// Example route handlers
const getExample = (req, res) => {
  res.send('GET request to the example route');
};

const createExample = (req, res) => {
  res.send('POST request to the example route');
};

const updateExample = (req, res) => {
  res.send(`PUT request to the example route with ID ${req.params.id}`);
};

const deleteExample = (req, res) => {
  res.send(`DELETE request to the example route with ID ${req.params.id}`);
};

// Export the example handler
module.exports = {
  getExample,
  createExample,
  updateExample,
  deleteExample,
};