const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')



// middleware 
app.use(express.json())


// Routes
app.use('/api/tasks',tasks)
app.use(notFound)
app.use(errorHandler)

// BD and Server
const port = process.env.PORT || 1234
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is running on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}
start();

