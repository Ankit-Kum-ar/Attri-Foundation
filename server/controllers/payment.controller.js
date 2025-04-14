const razporyInstance = require("../config/razorpay");
const Donation = require("../models/donation.model");

const createOrder = async (req, res) => {
    try {
        const { amount, fullName, email, donationType } = req.body;
        if (!amount || !fullName || !email || !donationType) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        if (isNaN(amount) || amount <= 0) {
            return res.status(400).json({ error: 'Invalid amount' });
        }
        const options = {
            amount: amount * 100, // Amount in paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            notes: {
                fullName,
                email,
                donationType
            },
        };

        const order = await razporyInstance.orders.create(options);
        if (!order) {
            return res.status(500).json({ error: 'Order creation failed' });
        }

        // Save donation details in the database
        const donation = new Donation({
            fullName,
            email,
            donationType,
            amount,
            razorpayOrderId: order.id,
        });
        await donation.save();

        res.status(200).json({
            success: true,
            order
        });

    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}

const verifyPayment = async (req, res) => {
    try {
      const { razorpayOrderId, razorpayPaymentId } = req.body;
  
      // Find the donation record by Razorpay Order ID
      const donation = await Donation.findOne({ razorpayOrderId });
      if (!donation) {
        return res.status(404).json({ error: "Donation not found" });
      }
  
      // Update the payment status and Razorpay Payment ID
      donation.paymentStatus = "Completed";
      donation.razorpayPaymentId = razorpayPaymentId;
      await donation.save();
  
      res.status(200).json({ success: true, message: "Payment verified" });
    } catch (error) {
      console.error("Error verifying payment:", error);
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  };


module.exports = {
    createOrder,
    verifyPayment
};