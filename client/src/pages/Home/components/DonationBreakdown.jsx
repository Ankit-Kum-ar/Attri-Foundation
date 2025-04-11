import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const DonationBreakdown = () => {
  const data = {
    labels: [
      "Educational Resources",
      "Skill Development Programs",
      "Health & Hygiene Drives",
      "Operational Costs",
      "Emergency Relief Fund",
    ],
    datasets: [
      {
        data: [40, 35, 10, 10, 5], // Percentage values
        backgroundColor: [
          "#BEF3C0", // Green
          "#AC94F1", // Purple
          "#F9CF64", // Yellow
          "#FFF0CA", // Light Yellow
          "#F38FBF", // Pink
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%", // Creates the donut effect
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <section className="bg-[#0F0F0F] py-10 px-6 md:px-20 text-white font-roboto">
      <div className="flex flex-col md:flex-row items-center justify-between md:gap-20 gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <div className="flex items-center gap-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="3"
              viewBox="0 0 72 3"
              fill="none"
            >
              <path d="M0 1.50049H72" stroke="white" strokeWidth="2" />
            </svg>
            <h3 className="text-sm font-semibold uppercase text-[white]">
              Your Contribution, Our Responsibility
            </h3>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How we spend your donations and where it goes
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            We believe in complete transparency. Here's how every donation is
            thoughtfully distributed to maximize our impact and reach.
          </p>
          <ul className="space-y-4">
            {data.labels.map((label, index) => (
              <li key={index} className="flex items-center gap-4">
                <span
                  className="w-4 h-4 rounded-sm"
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                ></span>
                <p className="text-sm">
                  <strong>{data.datasets[0].data[index]}%</strong> {label}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Chart */}
        <div className="md:w-1/3 w-11/12 md:h-96 h-80">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </section>
  );
};

export default DonationBreakdown;