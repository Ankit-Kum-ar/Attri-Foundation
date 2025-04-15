import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleDonateClick = () => {
    if (location.pathname === "/") {
      // If already on the home page, scroll to the Donation section
      const donationSection = document.getElementById("donation-section");
      if (donationSection) {
        donationSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to the home page and scroll to the Donation section
      navigate("/");
      setTimeout(() => {
        const donationSection = document.getElementById("donation-section");
        if (donationSection) {
          donationSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to ensure the DOM is updated after navigation
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/do">What We Do</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="p-2 text-xl font-bold">
          ATTRI
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="btn btn-ghost">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="btn btn-ghost">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/do" className="btn btn-ghost">
              What We Do
            </Link>
          </li>
          <li>
            <Link to="/media" className="btn btn-ghost">
              Media
            </Link>
          </li>
          <li>
            <Link to="/contact" className="btn btn-ghost">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-neutral" onClick={handleDonateClick}>
          Donate
        </button>
      </div>
    </div>
  );
};

export default Navbar;