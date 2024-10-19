const express = require('express');
const dotenv = require('dotenv');
const MongooseConnect = require('./DBconnect/DBconnect');
const path = require('path');
const cors = require('cors');
const messageRoutes = require('./Routes/messageRoutes');

const app = express();
app.use(cors())
app.use(express.json());

// dotenv connect function && path usage
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// MongoDB connect function
MongooseConnect();


// Use message routes
app.use('/api', messageRoutes);

// Set port from environment or fallback to 8000
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
