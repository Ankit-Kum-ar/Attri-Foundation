const dotenv = require('dotenv');
dotenv.config({
    path: `.env.${process.env.NODE_ENV || 'development'}.local`
})

const {
    PORT,
    RAZORPAY_KEY_ID,
    RAZORPAY_KEY_SECRET,
    MONGODB_URI,
} = process.env;

module.exports = {
    PORT,
    RAZORPAY_KEY_ID,
    RAZORPAY_KEY_SECRET,
    MONGODB_URI,
}