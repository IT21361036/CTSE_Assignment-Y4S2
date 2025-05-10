// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const productRoutes = require('./routes/productRoutes');
// const dotenv = require('dotenv');

// // Load environment variables from .env
// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.set('strictQuery', true);
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB:', err));

// // Routes
// app.use('/api', productRoutes);

// // Define a route for the root URL
// app.get('/', (req, res) => {
//   res.send('Welcome to the CTSE Assignment Application!');
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Something went wrong!' });
// });

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// }).on('error', (err) => {
//   if (err.code === 'EADDRINUSE') {
//     console.error(`Port ${PORT} is already in use. Please use a different port.`);
//     process.exit(1);
//   } else {
//     throw err;
//   }
// });
//aa
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send('App is alive');
});


// Set Mongoose strict query mode
mongoose.set('strictQuery', true);

// Define PORT
const PORT = process.env.PORT || 3001;

// Connect to MongoDB and start the server only after connection is successful
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000 // Optional: increase timeout for slower networks
})
.then(() => {
  console.log('✅ Connected to MongoDB');

  // Routes
  app.use('/api', productRoutes);

  // Root route
  app.get('/', (req, res) => {
    res.send('Welcome to the CTSE Assignment Application!');
  });

  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });

  // Start server after successful DB connection
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`❌ Port ${PORT} is already in use. Please use a different port.`);
      process.exit(1);
    } else {
      throw err;
    }
  });

})
.catch(err => {
  console.error('❌ Could not connect to MongoDB:', err);
  process.exit(1); // Exit app if DB connection fails
});
