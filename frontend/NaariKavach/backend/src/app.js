const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to NaariKavach API');
});

// Import routes here
// const exampleRoute = require('./routes/exampleRoute');
// app.use('/api/example', exampleRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});