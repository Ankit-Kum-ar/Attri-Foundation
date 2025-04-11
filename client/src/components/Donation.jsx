import React, { useState } from "react";

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(72000);

  const donationAmounts = [12000, 24000, 36000, 48000, 60000, 72000, 84000, 96000];

  return (
    <section className="bg-base-100 py-16 px-6 md:px-20 font-roboto">
      <div className="container mx-auto text-center">
        {/* Header */}
        <h4 className="text-sm font-semibold uppercase text-[#1D2130] tracking-wider mb-2">
          Donate Now
        </h4>
        <h2 className="text-4xl font-bold text-[#1D2130] mb-4">
          Empower Lives, Protect the Future
        </h2>
        <p className="text-lg text-[#525560] mb-8">
          Your small act of giving creates a lifetime of impact across education, environment, and community welfare.
        </p>

        {/* Donation Amount Options */}
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

        {/* Donation Form */}
        <form className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-[#525560] mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-[#F2C94C] text-lg py-2"
            />
          </div>

          {/* Email ID */}
          <div>
            <label className="block text-sm font-medium text-[#525560] mb-2">Email ID</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-[#F2C94C] text-lg py-2"
            />
          </div>

          {/* Donation Type */}
          <div>
            <label className="block text-sm font-medium text-[#525560] mb-2">Donation Type</label>
            <select className="w-full border-b border-gray-400 focus:outline-none focus:border-[#F2C94C] text-lg py-2">
              <option value="">Select Donation Type</option>
              <option value="one-time">One-Time</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </form>

        {/* Submit Button */}
        <div className="mt-8">
          <button className="bg-[#F2C94C] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#e56e01] transition">
            Donate With Love ❤️
          </button>
        </div>
      </div>
    </section>
  );
};

export default DonationForm;