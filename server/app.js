const express = require('express');

const { PORT } = require('./config/env');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const paymentRouter = require('./routes/payment.route');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/api/v1/payment', paymentRouter);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the process with failure
});