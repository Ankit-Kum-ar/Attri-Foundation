const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  donationType: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: {
        values: ["Pending", "Completed", "Failed"],
        message: "{VALUE} is not a valid status",
    },
    default: "Pending",
  },
  razorpayOrderId: {
    type: String,
    required: true,
  },
  razorpayPaymentId: {
    type: String,
  }
}, {
  timestamps: true,
});

const Donation = mongoose.model("Donation", donationSchema);
module.exports = Donation;