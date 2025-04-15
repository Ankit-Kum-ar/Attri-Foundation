import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createOrder, verifyPayment } from "../redux/slices/DonationSlice"; // Adjust the import path as necessary
import toast, { Toaster } from "react-hot-toast";

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(72000);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    donationType: "",
  });

  const dispatch = useDispatch();

  const donationAmounts = [12000, 24000, 36000, 48000, 60000, 72000, 84000, 96000];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, donationType } = formData;

    if (!fullName || !email || !donationType) {
      toast.error("Please fill all the fields.", { position: "top-center" });
      return;
    }

    try {
      // Dispatch createOrder action
      const orderResponse = await dispatch(
        createOrder({ amount: selectedAmount, fullName, email, donationType })
      ).unwrap();

      const { order } = orderResponse;

      // Check if Razorpay SDK is loaded
      if (!window.Razorpay) {
        console.error("Razorpay SDK not loaded. Please check your script tag.");
        toast.error("Razorpay SDK not loaded. Please try again.", { position: "top-center" });
        return;
      }

      // Open Razorpay payment modal
      const razorpayOptions = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Replace with your Razorpay test key
        amount: order.amount,
        currency: order.currency,
        name: "NGO Donation",
        description: "Empower Lives, Protect the Future",
        order_id: order.id,
        handler: async (response) => {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

          // Dispatch verifyPayment action
          await dispatch(
            verifyPayment({
              razorpayOrderId: razorpay_order_id,
              razorpayPaymentId: razorpay_payment_id,
              razorpaySignature: razorpay_signature,
            })
          );
          toast.success("Payment successful!", { position: "top-center" });
        },
        prefill: {
          name: fullName,
          email: email,
        },
        theme: {
          color: "#F2C94C",
        },
      };

      const rzp = new window.Razorpay(razorpayOptions);
      rzp.open();
    } catch (error) {
      console.error("Error during payment:", error);
      toast.error("Payment failed. Please try again.", { position: "top-center" });
    }
  };

  return (
    <section id="donation-section" className="bg-base-100 py-16 px-6 md:px-20 font-roboto">
      <div className="container mx-auto text-center">
        <h4 className="text-sm font-semibold uppercase text-[#1D2130] tracking-wider mb-2">
          Donate Now
        </h4>
        <h2 className="text-4xl font-bold text-[#1D2130] mb-4">
          Empower Lives, Protect the Future
        </h2>
        <p className="text-lg text-[#525560] mb-8">
          Your small act of giving creates a lifetime of impact across education, environment, and community welfare.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {donationAmounts.map((amount) => (
            <label key={amount} className="flex items-center gap-2">
              <input
                type="radio"
                name="donationAmount"
                value={amount}
                checked={selectedAmount === amount}
                onChange={() => setSelectedAmount(amount)}
                className="form-radio"
              />
              <span className="text-lg font-medium text-[#1D2130]">{amount.toLocaleString()}</span>
            </label>
          ))}
        </div>

        <form
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-medium text-[#525560] mb-2 text-left">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-[#F2C94C] text-lg py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#525560] text-left mb-2">Email ID</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-[#F2C94C] text-lg py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#525560] mb-2 text-left">Donation Type</label>
            <select
              name="donationType"
              value={formData.donationType}
              onChange={handleInputChange}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-[#F2C94C] text-lg py-2"
            >
              <option value="">Select Donation Type</option>
              <option value="one-time">One-Time</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          <div className="mt-8 md:col-span-3">
            <button
              type="submit"
              className="bg-[#F2C94C] cursor-pointer text-white px-8 py-3 rounded-md font-semibold hover:bg-[#e56e01] transition"
            >
              Donate With Love ❤️
            </button>
          </div>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default DonationForm;