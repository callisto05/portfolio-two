const express = require('express');
const app = express();

// Routes
const exampleRouter = require('./routes/index');

// Middleware
app.use(express.json());

// Routes
app.use('/example', exampleRouter);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});