const Hero = () => {
  return (
    <section className="bg-base-100 md:my-20 my-16 px-6 md:px-20 font-roboto">
      <div className="flex flex-col md:flex-row items-start md:gap-20">
        {/* Left Content */}
        <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="3"
                    viewBox="0 0 72 3"
                    fill="none"
                >
                    <path d="M0 1.50049H72" stroke="black" strokeWidth="2" />
                </svg>
                <h4 className="text-sm font-semibold uppercase text-neutral tracking-wider">
                    Know About Us
                </h4>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D2130] mb-6 md:leading-16 leading-12">
                Driven by Purpose. <br /> Powered by People.
            </h2>
        </div>

        <div className="flex flex-col md:w-3/4">
          <p className="text-lg text-[#1D2130] mb-6 font-extrabold">
            We're on a mission to create lasting change across communities —
            one step, one smile, and one life at a time.
          </p>
          <p className="text-lg text-[#525560]">
            We believe change begins with empathy and action. Our mission is to
            uplift lives across causes — from education and shelter to
            environmental care and animal welfare. Through collaboration and
            compassion, we turn challenges into opportunities for lasting
            impact.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
