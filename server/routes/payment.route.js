const express = require('express');
const { createOrder, verifyPayment } = require('../controllers/payment.controller');
const paymentRouter = express.Router();

paymentRouter.post('/create-order', createOrder);

paymentRouter.post('/verify-payment', verifyPayment);

module.exports = paymentRouter;