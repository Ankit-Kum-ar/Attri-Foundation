const express = require('express');
const { PORT } = require('./config/env');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const paymentRouter = require('./routes/payment.route');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

// Allowed origins
const allowedOrigins = [
    'http://localhost:5173', // Localhost for development
    'https://ngo-attri.onrender.com', // Deployed frontend URL
];

// CORS configuration
app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // Allow cookies and credentials
}));

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